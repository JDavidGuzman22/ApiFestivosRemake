# API Festivos

API REST desarrollada con **Node.js, Express y MongoDB** para administrar y consultar los días festivos de Colombia.

Este proyecto forma parte del taller de Arquitectura de Software II del Instituto Tecnológico Metropolitano (ITM).

## Funcionalidades

- Consultar los festivos correspondientes a un año.
- Verificar si una fecha es festiva (respuesta en texto plano).
- Agregar nuevos festivos.
- Actualizar festivos existentes.
- Eliminar festivos.
- Calcular fechas según los cuatro tipos de festivos: fechas fijas, traslados al lunes y fechas relacionadas con la Pascua.

## Arquitectura

La aplicación utiliza una arquitectura por capas:

- **Rutas:** definición de los endpoints.
- **Controlador:** recepción de solicitudes y respuestas HTTP.
- **Servicios:** lógica de negocio y cálculo de fechas.
- **Repositorio:** operaciones sobre MongoDB.
- **Modelo:** conexión a la base de datos.
- **Validadores:** validación de los datos recibidos.
- **Configuración:** conexión a MongoDB y documentación Swagger.

Los festivos se almacenan en la base de datos `festivos`, dentro de la colección `tipos`.

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/festivos/tipos` | Consultar los tipos de festivo |
| GET | `/festivos/:anio` | Consultar festivos de un año |
| GET | `/festivos/verificar/:anio/:mes/:dia` | Verificar si una fecha es festiva |
| POST | `/festivos/:idTipo` | Agregar un festivo |
| PUT | `/festivos/:idTipo/:nombre` | Actualizar un festivo |
| DELETE | `/festivos/:idTipo/:nombre` | Eliminar un festivo |

## Ejecución local

Se requiere Node.js, npm y MongoDB en ejecución local, con la base de datos `festivos` y la colección `tipos` previamente cargadas.

Desde la carpeta `api-festivos`, instalar las dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

La API estará disponible en:

`http://localhost:3030`

## Documentación Swagger

Los endpoints están documentados mediante Swagger y se pueden consultar desde:

`http://localhost:3030/api-docs`

## Estado

La API Festivos se encuentra implementada. Se realizaron pruebas de consulta, verificación de fechas y operaciones de creación, actualización y eliminación sobre MongoDB.