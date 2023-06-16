# API

Protobuf definitions for Viam's public-facing API.

## Contributing

### Development

- `make setup` - Setup your development environment
- `make all` - Clean and build the Go and web generated libraries
- `make dist/buf` - Build the Go and web generated libraries without cleaning
- `make clean` - Clean tool cache

### Submitting PRs for Protobuf Changes

- Only submit PRs with changes to `.proto` files, CI will handle generating other files.
    - Upon (first) approval of the PR, file generation will happen.
    - Wait for it to complete (it will add a `protos-compiled` label and new files to the PR) before merging.
    - Do not make further changes after this point.
    - If stuck waiting for merge checks _after_ `protos-compiled` is added, try adding an unrelated label (ex: `enhancement`) to trigger it again.
- Do not make breaking changes to APIs if it can be avoided.

## License

Copyright 2023 Viam Inc.

Apache 2.0 - See [LICENSE](https://github.com/viamrobotics/api/blob/main/LICENSE) file
