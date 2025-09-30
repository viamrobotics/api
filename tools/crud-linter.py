#!/usr/bin/env python3
"""
Simple CRUD Naming Convention Linter for Viam Proto Files

Checks for common anti-patterns and suggests CRUD-compliant alternatives.
"""

import re
import sys
import argparse
from pathlib import Path


# Anti-patterns to detect and their suggestions
ANTI_PATTERNS = {
    r'rpc\s+New([A-Z]\w*)\s*\(': r'rpc Create\1(',
    r'rpc\s+Rename([A-Z]\w*)\s*\(': r'rpc Update\1(',
    r'rpc\s+Change([A-Z]\w*)\s*\(': r'rpc Update\1(',
}

# APIs that are allowed to violate the rules (grandfathered)
ALLOWED_VIOLATIONS = {
    'NewRobot', 'NewRobotPart', 'RenameDataset', 'RenameKey', 
    'RenameRegistryItem', 'RenameDataPipeline', 'ChangeRole', 'ReadOAuthApp'
}


def find_violations(file_path):
    """Find CRUD naming violations in a proto file."""
    violations = []
    
    try:
        with open(file_path, 'r') as f:
            lines = f.readlines()
    except FileNotFoundError:
        return violations
    
    for line_num, line in enumerate(lines, 1):
        for pattern, suggestion in ANTI_PATTERNS.items():
            match = re.search(pattern, line)
            if match:
                # Extract the full method name (e.g., "NewRobot", "RenameDataset")
                if 'New' in pattern:
                    method_name = 'New' + match.group(1)
                elif 'Rename' in pattern:
                    method_name = 'Rename' + match.group(1)
                elif 'Change' in pattern:
                    method_name = 'Change' + match.group(1)
                else:
                    method_name = match.group(1)
                
                # Skip if it's a grandfathered API
                if method_name in ALLOWED_VIOLATIONS:
                    continue
                    
                violations.append({
                    'file': file_path,
                    'line': line_num,
                    'original': line.strip(),
                    'suggestion': re.sub(pattern, suggestion, line).strip(),
                    'method': method_name
                })
    
    return violations


def lint_directory(directory='.'):
    """Lint all proto files in directory."""
    proto_files = list(Path(directory).rglob('*.proto'))
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
        
        print(f"  Line {violation['line']}: {violation['original']}")
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