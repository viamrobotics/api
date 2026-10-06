#!/usr/bin/env python3
"""
Simple CRUD Naming Convention Linter for Viam Proto Files

Enforces that all RPC methods start with approved CRUD verbs.
"""

import re
import sys
import argparse
from pathlib import Path


# Approved CRUD verbs that RPCs must start with
APPROVED_VERBS = {
    'Create', 'Add',           # CREATE operations
    'Get', 'List',             # READ operations  
    'Update', 'Set',           # UPDATE operations
    'Delete', 'Remove',        # DELETE operations
    'Enable', 'Disable',       # State change operations
    'Start', 'Stop',           # Control operations
}

# APIs that are allowed to violate the rules
ALLOWED_VIOLATIONS = {
    # Grandfathered APIs that should eventually be migrated to CRUD verbs
    'NewRobot', 'NewRobotPart', 'RenameDataset', 'RenameKey', 
    'RenameRegistryItem', 'RenameDataPipeline', 'ChangeRole', 'ReadOAuthApp',
    
    # Domain-specific component operations (physical actions)
    'MoveStraight', 'Spin', 'MoveToPosition', 'MoveToJointPositions', 'MoveThroughJointPositions',
    'GoFor', 'GoTo', 'SetRPM', 'ResetZeroPosition', 'ResetPosition', 'IsPowered', 'IsMoving',
    'Open', 'Grab', 'SetPower', 'SetVelocity', 'RenderFrame', 'GetImage', 'GetPointCloud',
    'Move', 'MoveOnMap', 'MoveOnGlobe', 'StopPlan', 'Push', 'TailRobotPartLogs',
    'Infer', 'Sync', 'Close', 'Hold', 'UploadModuleFile', 'UploadBinaryDataToDatasets',
    
    # Domain-specific service operations  
    'DoCommand', 'ShareLocation', 'UnshareLocation', 'LocationAuth', 'MarkPartAsMain',
    'MarkPartForRestart', 'RotateKey', 'ResendOrganizationInvite', 'SearchOrganizations',
    'CheckPermissions', 'TransferRegistryItem', 'MergeDatasets', 'TabularDataBySQL',
    'TabularDataByMQL', 'TabularDataByFilter', 'BinaryDataByFilter', 'BinaryDataByIDs',
    'ExportTabularData', 'GetLatestTabularData', 'ConfigureDatabaseUser', 'GetDatabaseConnection',
    
    # Complex domain operations
    'AddTagsToBinaryDataByIDs', 'RemoveTagsFromBinaryDataByIDs', 'AddBoundingBoxToImageByID', 
    'RemoveBoundingBoxFromImageByID', 'UpdateBoundingBox', 'TagsByFilter', 
    'BoundingBoxLabelsByFilter', 'AddBinaryDataToDatasetByIDs', 'RemoveBinaryDataFromDatasetByIDs',
    
    # Business/Auth operations
    'GetUserIDByEmail', 'GetOrganizationNamespaceAvailability', 'UpdateOrganizationNamespace',
    'UpdateOrganizationInviteAuthorizations', 'OrganizationSetSupportEmail', 'OrganizationGetSupportEmail',
    'OrganizationSetLogo', 'OrganizationGetLogo', 'GetAppContent', 'GetAppBranding',
    'CreateInvoiceAndChargeImmediately', 'SendPaymentRequiredEmail', 'GetCurrentMonthUsage',
    'GetOrgBillingInformation', 'GetInvoicesSummary', 'GetInvoicePdf', 'GetAvailableBillingTiers',
    'UpdateOrganizationBillingTier',
    
    # Build/deployment operations
    'StartBuild', 'StopBuild', 'LinkRepo', 'UnlinkRepo', 'LinkOrg', 'UnlinkOrg',
    'SubmitTrainingJob', 'SubmitCustomTrainingJob', 'CancelTrainingJob', 'DeleteCompletedTrainingJob',
    
    # Robot/system operations
    'ResourceNames', 'ResourceRPCSubtypes', 'CancelOperation', 'BlockForOperation', 
    'StreamStatus', 'SendSessionHeartbeat', 'Log', 'RestartModule', 'Shutdown',
    'FrameSystemConfig', 'TransformPose', 'TransformPCD', 'Tunnel', 'Config', 'Certificate',
    'NeedsRestart', 'DeviceAgentConfig', 'Ready', 'ValidateConfig', 'ReconfigureResource',
    
    # Data sync/upload operations
    'DataCaptureUpload', 'FileUpload', 'StreamingDataCaptureUpload',
    
    # Service-specific operations
    'CaptureAllFromCamera', 'DiscoverResources', 'Shell', 'CopyFilesToMachine', 'CopyFilesFromMachine',
    'Metadata', 'Echo', 'EchoMultiple', 'EchoBiDi', 'Home', 'IsHoldingSomething', 'Chunks',
    'Properties', 'Record', 'StreamEvents', 'TriggerEvent', 'PWM', 'PWMFrequency',
    'ReadAnalogReader', 'WriteAnalog', 'StreamTicks', 'ExitProvisioning',
    
    # Auth/legal operations  
    'IsLegalAccepted', 'AcceptLegal', 'RegisterAuthApplication',
}


def suggest_crud_name(method_name):
    """Suggest a CRUD-compliant name for a non-conforming method."""
    # Common anti-pattern mappings
    if method_name.startswith('New'):
        return f"rpc Create{method_name[3:]}(...)"
    elif method_name.startswith('Rename'):
        return f"rpc Update{method_name[6:]}(...)"
    elif method_name.startswith('Change'):
        return f"rpc Update{method_name[6:]}(...)"
    elif method_name.startswith('Read'):
        return f"rpc Get{method_name[4:]}(...)"
    elif 'All' in method_name and method_name.startswith('Get'):
        # GetAllUsers → ListUsers
        return f"rpc List{method_name[6:]}(...)"
    else:
        # Generic suggestion
        return f"Use approved CRUD verbs: Create, Get, List, Update, Delete, Add, Remove, Set, Enable, Disable, Start, Stop"


def find_violations(file_path):
    """Find CRUD naming violations in a proto file."""
    violations = []
    
    try:
        with open(file_path, 'r') as f:
            lines = f.readlines()
    except FileNotFoundError:
        return violations
    
    # Extract RPC method names and check them
    rpc_pattern = r'rpc\s+(\w+)\s*\('
    
    for line_num, line in enumerate(lines, 1):
        match = re.search(rpc_pattern, line)
        if match:
            method_name = match.group(1)
            
            # Skip if it's a grandfathered API
            if method_name in ALLOWED_VIOLATIONS:
                continue
            
            # Check if method starts with an approved verb
            starts_with_approved_verb = any(method_name.startswith(verb) for verb in APPROVED_VERBS)
            
            if not starts_with_approved_verb:
                # Generate suggestion based on method name
                suggestion = suggest_crud_name(method_name)
                
                violations.append({
                    'file': file_path,
                    'line': line_num,
                    'original': line.strip(),
                    'suggestion': suggestion,
                    'method': method_name,
                    'type': 'Non-CRUD naming'
                })
    
    return violations


def lint_directory(directory='.'):
    """Lint all proto files in directory."""
    proto_files = list(Path(directory).rglob('*.proto'))
    # Exclude node_modules and other irrelevant directories
    proto_files = [f for f in proto_files if 'node_modules' not in str(f)]
    
    all_violations = []
    
    for proto_file in proto_files:
        violations = find_violations(proto_file)
        all_violations.extend(violations)
    
    return all_violations


def print_results(violations):
    """Print linting results."""
    if not violations:
        print("✅ No CRUD naming violations found!")
        return 0
    
    print(f"❌ Found {len(violations)} CRUD naming violations:\n")
    
    current_file = None
    for violation in violations:
        if violation['file'] != current_file:
            current_file = violation['file']
            print(f"📄 {current_file}:")
        
        violation_type = violation.get('type', 'CRUD Anti-pattern')
        print(f"  Line {violation['line']} ({violation_type}): {violation['original']}")
        print(f"  💡 Suggested: {violation['suggestion']}")
        print()
    
    return 1


def main():
    parser = argparse.ArgumentParser(description='Simple CRUD naming linter for proto files')
    parser.add_argument('files', nargs='*', help='Proto files to check (default: all in current dir)')
    parser.add_argument('--strict', action='store_true', help='Exit with error code if violations found')
    
    args = parser.parse_args()
    
    if args.files:
        # Check specific files
        all_violations = []
        for file_path in args.files:
            violations = find_violations(file_path)
            all_violations.extend(violations)
    else:
        # Check all proto files in current directory
        all_violations = lint_directory()
    
    exit_code = print_results(all_violations)
    
    if args.strict:
        sys.exit(exit_code)
    else:
        sys.exit(0)


if __name__ == '__main__':
    main()