.PHONY: build-development
build-development:
	docker build -t zaphodbrox/app-relatei -f docker/development/Dockerfile .

.PHONY: start-development
start-development:
	docker run -p 5173:5173 --detach --rm zaphodbrox/app-relatei
