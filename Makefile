PATH_WITH_TOOLS="`pwd`/bin:`pwd`/frontend/node_modules/.bin:${PATH}"

setup:
	bash etc/setup.sh

clean-all:
	git clean -fxd

dist/tool-install: Makefile
	GOBIN=`pwd`/bin go install google.golang.org/protobuf/cmd/protoc-gen-go \
		github.com/bufbuild/buf/cmd/protoc-gen-buf-breaking \
		github.com/bufbuild/buf/cmd/protoc-gen-buf-lint \
		github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc \
		google.golang.org/grpc/cmd/protoc-gen-go-grpc \
		github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2 \
		github.com/srikrsna/protoc-gen-gotag \
		github.com/edaniels/golinters/cmd/combined \
		github.com/golangci/golangci-lint/cmd/golangci-lint \
		github.com/bufbuild/buf/cmd/buf
	mkdir -p dist
	touch dist/tool-install

dist/buf: dist/buf-go

dist/buf-go: dist/tool-install proto/viam/app/v1/app.proto proto/tagger/v1/tagger.proto
	PATH=$(PATH_WITH_TOOLS) buf lint
	PATH=$(PATH_WITH_TOOLS) buf format -w
	PATH=$(PATH_WITH_TOOLS) buf generate
	PATH=$(PATH_WITH_TOOLS) buf generate --template ./etc/buf.gen.tag.yaml
	touch dist/buf-go

lint: dist/tool-install
	PATH=$(PATH_WITH_TOOLS) buf lint
	PATH=$(PATH_WITH_TOOLS) buf format -w
	export pkgs=`go list -f '{{.Dir}}' ./... | grep -v gen | grep -v proto` && echo "$$pkgs" | xargs go vet -vettool=bin/combined
	export pkgs=`go list -f '{{.Dir}}' ./... | grep -v gen | grep -v proto` && echo "$$pkgs" | xargs go run github.com/golangci/golangci-lint/cmd/golangci-lint run -v --fix --config=./etc/.golangci.yaml
