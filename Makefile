build:
	@docker build -t artronics/nhsd-jwt-docker:latest .

run:
	@docker run --rm -it artronics/nhsd-jwt-docker:latest $(ARGS)
