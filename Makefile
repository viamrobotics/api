PROTO_FILES := $(shell find proto/ -type f -name '*.proto')

export GOBIN := $(shell pwd)/bin/gotools/$(shell uname -s)-$(shell uname -m)
export PATH := $(GOBIN):$(shell npm root)/.bin:$(PATH)

.PHONY: all
all: clean dist/buf

.PHONY: setup
setup:
	bash etc/setup.sh

.PHONY: clean
clean:
	git clean -fxd

dist/tool-install: Makefile
	npm ci --audit=false
	go install google.golang.org/protobuf/cmd/protoc-gen-go \
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

.PHONY: dist/buf
dist/buf: dist/buf-go dist/buf-web

dist/buf-go: dist/tool-install $(PROTO_FILES)
	buf lint
	buf format -w
	buf generate --template ./proto/viam/buf.gen.yaml
	buf generate --template ./proto/viam/buf.gen.tagger.yaml
	touch dist/buf-go

dist/buf-web: dist/tool-install $(PROTO_FILES)
	buf lint
	buf format -w
	buf generate --template ./proto/viam/buf.gen.web.yaml
	buf generate --timeout 5m --template ./proto/viam/buf.gen.web.yaml buf.build/googleapis/googleapis
	touch dist/buf-web

.PHONY: lint
lint: dist/tool-install
	buf lint
	buf format -w
	export pkgs=`go list -f '{{.Dir}}' ./... | grep -v gen | grep -v proto` && echo "$$pkgs" | xargs go vet -vettool=`which combined`
	export GOGC=50 pkgs=`go list -f '{{.Dir}}' ./... | grep -v gen | grep -v proto` && echo "$$pkgs" | xargs golangci-lint run $(LINT_BUILD_TAGS) -v --fix --config=./etc/.golangci.yaml
