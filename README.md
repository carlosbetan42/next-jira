# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL local:

```
MONGO_URL=mongodb://localhost:27019/entriesdb
```

- Reconstruir los módulos de node

```
npm install
npm run dev -- -p 3003
```

## Configurar las variables de entorno

Renombrar el archivo **.env.example** a **.env**

## Llenar la base de datos con información de pruebas

Llamará:

```
http://localhost:3003/api/seed
```
