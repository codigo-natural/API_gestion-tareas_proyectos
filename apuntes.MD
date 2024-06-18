### Tabla `project`
| Columna     | Tipo de Dato |
|-------------|--------------|
| id          | int          |
| name        | varchar      |
| priority    | int          |
| description | text         |

### Tabla `task`
| Columna     | Tipo de Dato |
|-------------|--------------|
| id          | int          |
| name        | varchar      |
| done        | boolean      |
| projectid   | int          |

### Relación entre `project` y `task`
La columna `projectid` en la tabla `task` es una clave foránea que referencia la columna `id` en la tabla `project`.

```sql
ALTER TABLE task
ADD CONSTRAINT fk_project
FOREIGN KEY (projectid) REFERENCES project(id);
```