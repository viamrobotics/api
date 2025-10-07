# API

Protobuf definitions for Viam's public-facing API.

## Contributing

### Development

Our development environment has some dependencies that you should install
through your system's package manager:

- `curl`
- `gpg` (called `gnupg` in Homebrew)

We use [mise-en-place][mise] to manage additional required tools. You can
install it on MacOS and most Linux distributions with the following command:

```bash
curl https://mise.run | sh
```

Note that the install script will print instructions for activating mise in
your shell that you will need to follow to get a working build environment.

Mise is also available in Homebrew and several package repositories. See the
[official documentation][install-mise] for a list of installation methods.

For security, mise requires projects to be trusted before it will load their
configuration. Normally it will prompt you for this the first time you run any
mise commands within the repo, but if it doesn't and you are seeing errors like
`mise ERROR no tasks defined in ~/api. Are you in a project directory?`, try
manually trusting the workspace by running `mise trust`.

Once mise is set up you can run `mise tasks` to view the available targets.
Some common ones are:

- `mise r -f buf` - Unconditionally build the Go and web generated libraries
- `mise r clean` - Remove untracked files from the workspace

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
