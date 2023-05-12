TOOL_BIN = bin/gotools/$(shell uname -s)-$(shell uname -m)

PATH_WITH_TOOLS="`pwd`/$(TOOL_BIN):`pwd`/node_modules/.bin:${PATH}"

PROTO_FILES=$(shell find proto/ -type f -name '*.proto')

setup:
	bash etc/setup.sh

clean-all:
	git clean -fxd

dist/tool-install: Makefile
	npm ci --audit=false
	GOBIN=`pwd`/$(TOOL_BIN) go install google.golang.org/protobuf/cmd/protoc-gen-go \
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

dist/buf: dist/buf-go dist/buf-web

dist/buf-go: dist/tool-install $(PROTO_FILES)
	PATH=$(PATH_WITH_TOOLS) buf lint
	PATH=$(PATH_WITH_TOOLS) buf format -w
	PATH=$(PATH_WITH_TOOLS) buf generate --template ./proto/viam/buf.gen.yaml
	PATH=$(PATH_WITH_TOOLS) buf generate --template ./proto/viam/buf.gen.tagger.yaml
	touch dist/buf-go

dist/buf-web: dist/tool-install $(PROTO_FILES)
	PATH=$(PATH_WITH_TOOLS) buf lint
	PATH=$(PATH_WITH_TOOLS) buf format -w
	PATH=$(PATH_WITH_TOOLS) buf generate --template ./proto/viam/buf.gen.web.yaml
	PATH=$(PATH_WITH_TOOLS) buf generate --timeout 5m --template ./proto/viam/buf.gen.web.yaml buf.build/googleapis/googleapis

lint: dist/tool-install
	PATH=$(PATH_WITH_TOOLS) buf lint
	PATH=$(PATH_WITH_TOOLS) buf format -w
	export pkgs=`go list -f '{{.Dir}}' ./... | grep -v gen | grep -v proto` && echo "$$pkgs" | xargs go vet -vettool=$(TOOL_BIN)/combined
	export GOGC=50 pkgs=`go list -f '{{.Dir}}' ./... | grep -v gen | grep -v proto` && echo "$$pkgs" | xargs $(TOOL_BIN)/golangci-lint run $(LINT_BUILD_TAGS) -v --fix --config=./etc/.golangci.yaml
