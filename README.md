# Portfolio personal — gonnnzadev

Aplicación web de una sola página construida con **Angular 18** que funciona como portfolio personal.

## Autor

**Gonzalo Leonel López** — Desarrollador Fullstack (backend), con conocimientos en ciberseguridad y DevOps.

- GitHub: [@gonnnzaDev](https://github.com/gonnnzaDev)
- LinkedIn: [gonzalo-leonel-lopez](https://www.linkedin.com/in/gonzalo-leonel-lopez)

## Versión de Angular

**Angular 18.2** (standalone components, sintaxis de control de flujo `@if` / `@for` y signals disponibles, pero no utilizados).

| Paquete | Versión |
|---|---|
| `@angular/core` | 18.2.14 |
| `@angular/router` | 18.2.14 |
| `@angular/forms` | 18.2.14 |
| `@angular/cli` | 18.2.21 |
| TypeScript | 5.4.5 |
| RxJS | 7.8.2 |
| json-server | 1.0.0-beta.15 |

Entorno probado con **Node.js v20.19.2** y **npm 9.2.0**.

## Arquitectura

La aplicación consume una API REST falsa servida por **json-server** sobre `db.json`. No hay backend real: la base de datos es el propio archivo JSON.

```
src/app/
├── Components/          # header, footer
├── Models/              # interfaces Proyecto y Solicitud
├── Pages/               # componentes de ruta
├── Service/             # servicios HTTP (CRUD contra json-server)
└── Utils/               # helpers (resolución de iconos SVG)
db.json                  # base de datos: proyectos + solicitudes
public/logos/            # logos de proyectos e iconos de tecnologías
```

## Instalación

Ubicarse en la carpeta del proyecto:

```bash
cd simulacro3
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

La aplicación necesita **dos procesos corriendo en paralelo** en ventanas separadas.

### 1. json-server (base de datos)

En una terminal:

```bash
npm run db
```

Levanta json-server en `db.json` y expone la API en **http://localhost:3000**.

```
GET    /proyectos
GET    /proyectos/:id
POST   /proyectos
PUT    /proyectos/:id
DELETE /proyectos/:id

GET    /solicitudes
GET    /solicitudes/:id
POST   /solicitudes
PUT    /solicitudes/:id
DELETE /solicitudes/:id
```

### 2. Angular (servidor de desarrollo)

En otra terminal:

```bash
npm start
```

O directamente:

```bash
ng serve
```

La aplicación queda disponible en **http://localhost:4200**.

> Si json-server no está corriendo, la aplicación compila igual pero las listas de
> proyectos y solicitudes aparecen vacías y la consola muestra el error de red.

### Build de producción

```bash
npm run build
```

Genera el bundle estático en `dist/simulacro3/browser/`.

### Tests

```bash
npm test
```

## Rutas de la aplicación

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `HomeComponent` | Portada: presentación, tecnologías y contacto |
| `/mis-proyectos` | `MisProyectosComponent` | Listado de proyectos con sus iconos de stack |
| `/proyecto/:id` | `ProyectoComponent` | Detalle de un proyecto |
| `/solicitudes` | `SolicitudesComponent` | Listado de solicitudes recibidas |
| `/solicitud/:id` | `SolicitudEspecificoComponent` | Detalle, edición y baja de una solicitud |
| `/contactame-form` | `ContactameFormComponent` | Formulario de contacto (alta) |
| `/contactame-form/:id` | `ContactameFormComponent` | Formulario de contacto (edición) |

El formulario de contacto funciona en **dos modos** con el mismo componente: sin `:id` crea una solicitud nueva, y con `:id` precarga los datos existentes y actualiza. La decisión se toma en `onSubmit()` a partir del parámetro de ruta.

## Descripción de la aplicación

Es un portfolio personal con dos secciones diferenciadas.

**La parte de portfolio** muestra los proyectos del autor: una portada con perfil y stack, un listado de tarjetas y una vista de detalle por proyecto. Cada proyecto incluye descripción corta y extendida, tecnologías utilizadas e imagen. Las tecnologías se renderizan como iconos SVG locales en lugar de texto plano, con un badge de texto como fallback para las que no tienen icono disponible. Los logos de cada proyecto se resolvieron desde los repositorios correspondientes: cuatro tienen logo propio y el restante usa la imagen OpenGraph de GitHub.

**La parte de gestión** funciona como un CRM mínimo. El navbar enlaza a un listado de solicitudes de contacto, cada una con su detalle. Desde el detalle se puede editar (reusando el mismo formulario del alta en modo edición) o eliminar. Los datos viven en `db.json` y se manipulan con un servicio HTTP por recurso, siguiendo el mismo patrón CRUD para `proyectos` y `solicitudes`.

### Funcionalidades

- **Listado y detalle** de proyectos y de solicitudes, con rutas parametrizadas por `id`.
- **CRUD de solicitudes**: alta, edición, eliminación y consulta individual.
- **Formulario reactivo** con validación de campos obligatorios y preventivo de submit inválido.
- **Iconografía por tecnología** resuelta desde SVG locales, con degradación a badge de texto.
- **Tema oscuro** con paleta definida por custom properties en CSS.

## Tecnologías

| Área | Tecnología |
|---|---|
| Frontend | Angular 18, TypeScript, HTML, CSS |
| Formularios | Angular Reactive Forms |
| Routing | Angular Router |
| Datos | json-server |
| Iconos | SVG locales (devicon / simple-icons) |
