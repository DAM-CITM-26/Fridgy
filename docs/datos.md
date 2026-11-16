
# 1. Productos

La entidad PRODUCTOS representa los alimentos almacenados en la nevera del usuario.

Cada producto contiene un identificador, un nombre, una cantidad, una unidad de medida y una fecha de caducidad.

| Campo | Tipo | Ejemplo |
|----------|---|---|
| id       | Number | 1 |
| nombre   | String | "Leche de avena" |
| cantidad | Number | 1 |
| unidad   | String | "l" |
| caduca   | String (AAAA-MM-DD) | "2026-11-18" |

## Ejemplo JSON

```json
{
  "id": 1,
  "nombre": "Leche de avena",
  "cantidad": 1,
  "unidad": "l",
  "caduca": "2026-11-18"
}
```



# 2. Recetas

La entidad RECETAS representa las recetas disponibles en la aplicación.

Cada receta contiene un identificador, un nombre, una lista de ingredientes y el tiempo de preparación en minutos.

| Campo | Tipo | Ejemplo |
|---|---|---|
| id | Number | 1 |
| nombre | String | "Tortilla de espinacas" |
| ingredientes | Array de String | ["Huevos", "Espinacas", "Cebolla"] |
| minutos | Number | 15 |

## Ejemplo JSON

```json
{
  "id": 1,
  "nombre": "Tortilla de espinacas",
  "ingredientes": [
    "Huevos",
    "Espinacas",
    "Cebolla"
  ],
  "minutos": 15
}
```

