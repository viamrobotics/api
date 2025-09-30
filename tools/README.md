# Simple CRUD Naming Linter

A lightweight linter that checks for CRUD naming convention violations in Protocol Buffer files.

## What it checks

- ❌ `NewResource` → ✅ `CreateResource`
- ❌ `RenameResource` → ✅ `UpdateResource`
- ❌ `ChangeResource` → ✅ `UpdateResource`

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
❌ Found 3 CRUD naming violations:

📄 test-violations.proto:
  Line 8: rpc NewProject(NewProjectRequest) returns (NewProjectResponse);
  💡 Suggested: rpc CreateProject(NewProjectRequest) returns (NewProjectResponse);

  Line 9: rpc RenameUser(RenameUserRequest) returns (RenameUserResponse);
  💡 Suggested: rpc UpdateUser(RenameUserRequest) returns (RenameUserResponse);

  Line 10: rpc ChangePassword(ChangePasswordRequest) returns (ChangePasswordResponse);
  💡 Suggested: rpc UpdatePassword(ChangePasswordRequest) returns (ChangePasswordResponse);
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

## Grandfathered APIs

These existing APIs are allowed to violate the rules:

- `NewRobot`, `NewRobotPart`
- `RenameDataset`, `RenameKey`, `RenameRegistryItem`, `RenameDataPipeline`
- `ChangeRole`
- `ReadOAuthApp`
