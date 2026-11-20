# Administrador de Servicios

## Descripción

Proyecto desarrollado con Node.js y ECMAScript Modules (ESM) que implementa una clase `ServiceManager` para gestionar los servicios de un sistema de turnos y reservas.

Permite consultar, agregar, actualizar y eliminar servicios mediante operaciones CRUD, utilizando un archivo JSON como sistema de almacenamiento de datos.

## Tecnologías utilizadas

- Node.js
- JavaScript (ESM)
- dotenv
- File System (fs)
- JSON

## Estructura del proyecto


src/
├── config/
│   └── env.config.js
├── managers/
│   └── ServiceManager.js
├── data/
│   └── services.json
└── app.js

.env
.env.example
.gitignore
package.json
README.md


## Instalación

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Ingresar al directorio del proyecto:

```bash
cd administrador-servicios
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=8080
NODE_ENV=development
```

## Ejecución

Para ejecutar el proyecto:

```bash
node src/app.js
```

La configuración del entorno se valida al iniciar la aplicación. Si falta alguna variable requerida, se genera un error indicando cuál debe configurarse.

## Variables de entorno

| Variable | Descripción | Valor de ejemplo |
|---|---|---|
| PORT | Puerto de la aplicación | 8080 |
| NODE_ENV | Entorno de ejecución | development |

## Recurso: Services

Cada servicio contiene las siguientes propiedades:

| Propiedad | Descripción |
|---|---|
| id | Identificador único generado automáticamente |
| name | Nombre del servicio |
| description | Descripción del servicio |
| duration | Duración del servicio |
| price | Precio del servicio |
| category | Categoría del servicio |
| available | Disponibilidad del servicio |

## Métodos de ServiceManager

### getServices()

Devuelve todos los servicios registrados.

```javascript
serviceManager.getServices();
```

### getServiceById(id)

Busca y devuelve un servicio según su identificador. Si no existe, devuelve `null`.

```javascript
serviceManager.getServiceById(1);
```

### addService(serviceData)

Agrega un nuevo servicio. El identificador se genera automáticamente y se valida que estén presentes todos los campos obligatorios.

```javascript
serviceManager.addService({
    name: "Odontología",
    description: "Extracción de muela",
    duration: 30,
    price: 100,
    category: "Dental",
    available: true
});
```

### updateService(id, updatedData)

Actualiza los datos de un servicio existente sin permitir modificar su identificador. Si no existe, devuelve `null`.

```javascript
serviceManager.updateService(1, {
    price: 150
});
```

### deleteService(id)

Elimina un servicio según su identificador. Si no existe, devuelve `null`.

```javascript
serviceManager.deleteService(1);
```

## Almacenamiento de datos

Los servicios se almacenan en `src/data/services.json`.

La clase `ServiceManager` utiliza el módulo `fs` de Node.js para leer y escribir los datos, manteniendo los cambios realizados en el archivo JSON.

---

**Proyecto realizado como parte de la formación en Backend con Node.js.**