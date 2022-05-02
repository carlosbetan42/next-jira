# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL local:

```
mongodb://localhost:27019/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo **.env.example** a **.env**

## Llenar la base de datos con información de pruebas

Llamará:

```
http://localhost:3003/api/seed
```
