SHELL := bash

PROTO_FILES := $(shell find proto/ -type f -name '*.proto')

export GOBIN := $(shell pwd)/bin/gotools/$(shell uname -s)-$(shell uname -m)
export PATH := $(GOBIN):$(shell npm root)/.bin:$(PATH)

.PHONY: all
all: clean dist/buf

.PHONY: clean
clean:
	git clean -fxd

dist/tool-install: Makefile
	mise install
	npm ci --audit=false
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
