SHELL := bash

.PHONY: all
all: print_deprecation
	mise r clean ::: buf

.PHONY: print_deprecation
print_deprecation:
	@echo "Makefile deprecated; please call mise run directly"

.PHONY: clean
clean: print_deprecation
	git clean -fxd

.PHONY: dist/tool-install
dist/tool-install: print_deprecation
	mise install

.PHONY: dist/buf
dist/buf: dist/buf-go dist/buf-web print_deprecation

.PHONY: dist/buf-go
dist/buf-go: print_deprecation
	mise r buf-go

.PHONY: dist/buf-web
dist/buf-web: dist/tool-install $(PROTO_FILES) print_deprecation
	mise r buf-web

.PHONY: lint
lint: dist/tool-install print_deprecation
	mise r lint
