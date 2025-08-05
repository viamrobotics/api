# API

Protobuf definitions for Viam's public-facing API.

## Contributing

### Development

We use [mise-en-place][mise] manage relevant tooling. It should be installed
automatically by all relevant make targets using your system's package manager.
You can also find other installation methods in the
[official docs][install-mise].

- `make all` - Clean and build the Go and web generated libraries
- `make dist/buf` - Build the Go and web generated libraries without cleaning
- `make clean` - Clean tool cache

### Submitting PRs for Protobuf Changes

Please only edit `.proto` files. The generated interfaces build in CI.

To build protos for a PR:
- add the `ready-for-protos` label
- adding the label will compile your protos, and commit the compiled changes to your PR branch from the github-actions bot
    - the bot commit will also add a `protos-compiled` label which is checked to merge. subsequent manual commits remove this label
- when you're ready to merge, **remove** the `ready-for-protos` label; that will trigger lint and merge checks
- in order to merge, the last commit to your PR must be a bot commit. (this is enforced through labeling)

Other guidelines:
- Do not make breaking changes to APIs if it can be avoided.
- Always use semantic version tags (not hashes) when importing this into other projects, such as RDK.
    + For example, use `go get go.viam.com/api@v0.1.180` NOT `go get go.viam.com/api@037415e`
    + Add a new (semantic version compatible) tag when needed for this.
    + Do NOT duplicate, move, or remove version tags.

## License

Copyright 2023 Viam Inc.

Apache 2.0 - See [LICENSE](https://github.com/viamrobotics/api/blob/main/LICENSE) file

[mise]: https://mise.jdx.dev/
[install-mise]: https://mise.jdx.dev/installing-mise.html
