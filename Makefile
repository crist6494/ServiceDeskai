# Nombre del servicio
SERVICE_BACKEND = backend
SERVICE_FRONTEND = frontend
SERVICE_MONGO = mongo

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
	$(DOCKER_COMPOSE) logs -f $(SERVICE_BACKEND) $(SERVICE_FRONTEND) 

.PHONY: build up down logs