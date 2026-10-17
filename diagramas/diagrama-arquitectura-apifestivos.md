``` mermaid
graph TD

    %% Cliente / Capa de Presentación Externa
    subgraph ClientLayer [Capa de Cliente]
        Client[Cliente Web / Móvil / Postman / Swagger UI]
    end

    %% Capa de Entrada y Enrutamiento
    subgraph PresentationLayer [Capa de Presentación / API]
        Index[index.js / app.js]
        Routes[Rutas Express<br/><i>festivo.rutas.js</i>]
        Validators[Middlewares / Validadores<br/><i>festivo.validador.js</i>]
    end

    %% Capa de Lógica de Negocio
    subgraph BusinessLayer [Capa de Lógica de Negocio]
        Controller[Controlador<br/><i>festivo.controlador.js</i>]

        TipoService[Servicio de Tipos de Festivo<br/><i>tipoFestivo.servicio.js</i>]

        FestivoService[Servicio de Festivos<br/><i>festivo.servicio.js</i><br/><br/>CRUD Festivos<br/>Verificación de fecha festiva<br/>Listado de festivos por año]

        DateService[Servicio de cálculo de fechas<br/><i>fecha.servicio.js</i>]
    end

    %% Capa de Acceso a Datos
    subgraph DataAccessLayer [Capa de Acceso a Datos]
        Repository[Repositorio / Modelos<br/><i>festivo.repositorio.js</i>]
    end

    %% Capa de Persistencia
    subgraph PersistenceLayer [Capa de Persistencia]
        DB[(Base de Datos - MongoDB<br/><i>festivos</i>)]
    end

    %% Flujo principal
    Client -->|1. Petición HTTP| Index
    Index -->|2. Delega a| Routes
    Routes -->|3. Valida datos| Validators
    Validators -->|4. Pasa filtro| Controller

    %% Servicios de negocio
    Controller -->|5. Operaciones de tipos| TipoService
    Controller -->|6. Operaciones de festivos| FestivoService

    %% Servicio auxiliar para cálculos
    FestivoService -->|7. Solicita cálculo cuando se requiere| DateService
    DateService -.->|8. Retorna fecha calculada| FestivoService

    %% Acceso a datos
    TipoService -->|9. Consulta / Modifica| Repository
    FestivoService -->|10. Consulta / Modifica| Repository
    Repository -->|11. Consulta / Modifica| DB

    %% Flujo de respuesta
    DB -.->|12. Retorna datos| Repository
    Repository -.->|13. Retorna resultado| TipoService
    Repository -.->|14. Retorna resultado| FestivoService
    TipoService -.->|15. Retorna resultado| Controller
    FestivoService -.->|16. Retorna resultado| Controller
    Controller -.->|17. Respuesta HTTP (JSON o texto plano)| Client

    %% Estilos de Nodos
    style ClientLayer fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
    style PresentationLayer fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    style BusinessLayer fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
    style DataAccessLayer fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style PersistenceLayer fill:#ffebee,stroke:#d32f2f,stroke-width:2px
```
