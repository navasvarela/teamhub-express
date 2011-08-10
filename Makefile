all: clean lint test

.PHONY: test

export NODE_PATH = lib:apps

clean:
	-rm -rf build

lint:
	find lib/ -name '*.js' -exec jslint '{}' \;

test: lint
	nodeunit test/routes


