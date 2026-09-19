SHELL := bash

.PHONY: all
all: dist/tool-install
	mise r --force clean ::: buf

.PHONY: clean
clean:
	git clean -fxd

.PHONY: dist/tool-install
dist/tool-install:
	mise install

.PHONY: dist/buf
dist/buf: dist/buf-go dist/buf-web

.PHONY: dist/buf-go
dist/buf-go: dist/tool-install
	mise r buf-go

.PHONY: dist/buf-web
dist/buf-web: dist/tool-install
	mise r buf-web

.PHONY: lint
lint: dist/tool-install
	mise r lint

.PHONY: crud-lint
crud-lint:
	python3 tools/crud-linter.py

.PHONY: crud-lint-strict
crud-lint-strict:
	python3 tools/crud-linter.py --strict

.PHONY: lint-all
lint-all: lint crud-lint
	@echo "✅ All linting completed"
