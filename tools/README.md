# Simple CRUD Naming Linter

A lightweight linter that enforces RPC methods start with approved CRUD verbs.

## How it works

**Positive enforcement**: All RPC methods must start with approved verbs

### Approved CRUD Verbs

- ✅ `Create`, `Add` - for creating resources/relationships
- ✅ `Get`, `List` - for reading single/multiple resources
- ✅ `Update`, `Set` - for modifying resources/properties
- ✅ `Delete`, `Remove` - for removing resources/relationships
- ✅ `Enable`, `Disable` - for state changes
- ✅ `Start`, `Stop` - for control operations

### Examples of violations

- ❌ `NewProject` → ✅ `CreateProject`
- ❌ `RenameUser` → ✅ `UpdateUser`
- ❌ `ProcessData` → ✅ Use approved verbs

## Usage

```bash
# Using Makefile (recommended)
make crud-lint                    # Check all proto files
make crud-lint-strict            # For CI (fails if violations found)
make lint-all                    # Run all linting (buf + CRUD)

# Direct usage
python3 tools/crud-linter.py                           # Check all files
python3 tools/crud-linter.py proto/viam/app/v1/app.proto  # Check specific files
python3 tools/crud-linter.py --strict                  # Exit with error if violations found
```

## Example output

```
❌ Found 4 CRUD naming violations:

📄 test-violations.proto:
  Line 7 (Non-CRUD naming): rpc NewProject(NewProjectRequest) returns (NewProjectResponse);
  💡 Suggested: rpc CreateProject(...)

  Line 8 (Non-CRUD naming): rpc RenameAccount(RenameAccountRequest) returns (RenameAccountResponse);
  💡 Suggested: rpc UpdateAccount(...)

  Line 9 (Non-CRUD naming): rpc ProcessData(ProcessDataRequest) returns (ProcessDataResponse);
  💡 Suggested: Use approved CRUD verbs: Create, Get, List, Update, Delete, Add, Remove, Set, Enable, Disable, Start, Stop

  Line 10 (Non-CRUD naming): rpc HandleRequest(HandleRequestRequest) returns (HandleRequestResponse);
  💡 Suggested: Use approved CRUD verbs: Create, Get, List, Update, Delete, Add, Remove, Set, Enable, Disable, Start, Stop
```

## CI Integration

Add to your GitHub Actions:

```yaml
- name: Check CRUD naming conventions
  run: make crud-lint-strict
```

Or run all linting together:

```yaml
- name: Run all linting
  run: make lint-all
```

## Exceptions

### Grandfathered APIs (should eventually migrate)

- `NewRobot`, `NewRobotPart`
- `RenameDataset`, `RenameKey`, `RenameRegistryItem`, `RenameDataPipeline`
- `ChangeRole`
- `ReadOAuthApp`

### Domain-specific Operations (permanent exceptions)

- Physical operations: `MoveStraight`, `Spin`, `GoFor`, `GoTo`, `Open`, `Close`
- Hardware queries: `GetImage`, `GetPointCloud`, `RenderFrame`, `IsMoving`, `IsPowered`
- Service operations: `DoCommand`, `Sync`, `Infer`, `Move`, `MoveOnMap`
- Data operations: `TabularDataBySQL`, `ExportTabularData`, `SearchOrganizations`
- Business operations: `ShareLocation`, `LocationAuth`, `CheckPermissions`

## Benefits of this approach

✅ **Comprehensive**: Catches ANY non-conforming naming (not just known anti-patterns)
✅ **Future-proof**: No need to add new anti-patterns as they're discovered  
✅ **Simple**: Single rule - "must start with approved verb"
✅ **Clear guidance**: Developers know exactly what verbs are allowed
