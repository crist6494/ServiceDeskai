# Nombre del servicio
SERVICE_NAME = backend

# Comandos de Docker Compose
DOCKER_COMPOSE = docker-compose

# Construir la imagen
build:
	$(DOCKER_COMPOSE) build

# Levantar los contenedores
up:
	$(DOCKER_COMPOSE) up -d

# Detener y eliminar los contenedores
down:
	$(DOCKER_COMPOSE) down

# Ver logs de los contenedores
logs:
	$(DOCKER_COMPOSE) logs -f $(SERVICE_NAME)

.PHONY: build up down logs