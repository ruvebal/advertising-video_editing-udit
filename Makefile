.PHONY: help env check setup install serve build clean

PORT ?= 4001
CONFIG ?= _config.yml

RUBY_BIN := /usr/local/opt/ruby@3.3/bin
GEM_BIN := /usr/local/lib/ruby/gems/3.3.0/bin

ENV := PATH="$(RUBY_BIN):$(GEM_BIN):$(PATH)"

help:
	@echo "make setup        Install bundler + gems"
	@echo "make serve        Run jekyll server (PORT=$(PORT))"
	@echo "make build        Build site"
	@echo "make clean        Remove _site"
	@echo "make env          Show ruby/bundler used"

env:
	@$(ENV) ruby --version
	@$(ENV) which ruby
	@$(ENV) bundler --version || true
	@$(ENV) bundle --version || true
	@$(ENV) which bundle

check:
	@test -x "$(RUBY_BIN)/ruby"
	@$(ENV) ruby -e "exit(RUBY_VERSION.to_f >= 3.1 ? 0 : 1)"

setup: check
	@$(ENV) gem install bundler -v 2.6.9
	@$(ENV) bundle _2.6.9_ install

install: setup

serve: check
	@$(ENV) bundle _2.6.9_ exec jekyll serve --config $(CONFIG) --port $(PORT)

build: check
	@$(ENV) bundle _2.6.9_ exec jekyll build --config $(CONFIG)

clean:
	@rm -rf _site
