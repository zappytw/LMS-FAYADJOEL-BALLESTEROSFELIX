<!-- ========================================================= -->

<!-- HEADER -->

<!-- ========================================================= -->

<h1 align="center">🎓 LMS - Learning Management System</h1>

<p align="center">
Plataforma educativa tipo <b>Learning Management System</b> desarrollada con <b>HTML, CSS y JavaScript</b>.
</p>

<p align="center">

![HTML](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Git](https://img.shields.io/badge/Git-VersionControl-red?logo=git)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-educational-green)

</p>

<p align="center">
Sistema de gestión educativa que permite administrar <b>cursos, docentes y administradores</b> utilizando una arquitectura modular y almacenamiento persistente con <b>LocalStorage</b>.
</p>

---

# 📚 Tabla de Contenidos

* [Descripción del Proyecto](#descripción-del-proyecto)
* [Vista General del Sistema](#vista-general-del-sistema)
* [Características](#características)
* [Tecnologías](#tecnologías)
* [Arquitectura del Sistema](#arquitectura-del-sistema)
* [Estructura del Proyecto](#estructura-del-proyecto)
* [Modelo de Datos](#modelo-de-datos)
* [Persistencia de Datos](#persistencia-de-datos)
* [Diagrama Entidad Relación](#diagrama-entidad-relación)
* [Módulos del Sistema](#módulos-del-sistema)
* [Flujo del Sistema](#flujo-del-sistema)
* [Instalación](#instalación)
* [Uso](#uso)
* [Buenas Prácticas](#buenas-prácticas)
* [Roadmap](#roadmap)
* [Contribución](#contribución)
* [Autores](#autores)
* [Licencia](#licencia)

---

# 📖 Descripción del Proyecto

**LMS (Learning Management System)** es una aplicación web diseñada para administrar información académica dentro de una plataforma educativa.

El sistema permite gestionar:

* 📚 Cursos
* 👨‍🏫 Docentes
* 🧑‍💼 Administradores
* 📊 Dashboard administrativo
* 👤 Perfil de usuario

Este proyecto implementa una **arquitectura frontend modular**, donde cada módulo gestiona una funcionalidad específica del sistema.

Además, el sistema utiliza **LocalStorage como simulación de base de datos**, permitiendo almacenar información persistente directamente en el navegador.

---

# 🖥 Vista General del Sistema

```text
Dashboard
 ├── Gestión de Cursos
 ├── Gestión de Docentes
 ├── Gestión de Administradores
 └── Perfil de Usuario
```

---

# 🚀 Características

✔ Gestión completa de cursos
✔ Gestión de docentes
✔ Gestión de administradores
✔ Dashboard administrativo
✔ Perfil de usuario
✔ Persistencia de datos con LocalStorage
✔ Arquitectura modular en JavaScript
✔ Navegación multipágina
✔ Código organizado por módulos

---

# 🛠 Tecnologías

| Tecnología     | Uso                    |
| -------------- | ---------------------- |
| HTML5          | Estructura del sistema |
| CSS3           | Diseño visual          |
| JavaScript ES6 | Lógica del sistema     |
| LocalStorage   | Persistencia de datos  |
| Git            | Control de versiones   |

---

# 🏗 Arquitectura del Sistema

```text
                ┌──────────────────────┐
                │     User Interface   │
                │   HTML + CSS Pages   │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │     Logic Layer      │
                │    JavaScript ES6    │
                │                      │
                │ cursos.js            │
                │ docentes.js          │
                │ administradores.js   │
                │ dashboard.js         │
                │ profile.js           │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │      Data Layer      │
                │     LocalStorage     │
                └──────────────────────┘
```

---

# 📂 Estructura del Proyecto

```text
LMS-FAYADJOEL-DIAZJUAN
│
├── index.html
│
├── pages
│   ├── cursos.html
│   ├── docentes.html
│   ├── administradores.html
│   ├── dashBoard.html
│   └── profile.html
│
├── css
│   ├── main.css
│   ├── vars.css
│   └── pagesCSS
│       ├── cursos.css
│       ├── docentes.css
│       ├── dashBoard.css
│       ├── profile.css
│       └── index.css
│
├── utils
│   ├── data.js
│   ├── cursos.js
│   ├── docentes.js
│   ├── administradores.js
│   ├── dashBoard.js
│   ├── profile.js
│   ├── index.js
│   └── basicFuntions.js
│
└── media
```

---

# 🗄 Modelo de Datos

## 📘 Cursos

| Campo       | Tipo   | Descripción           |
| ----------- | ------ | --------------------- |
| id          | number | Identificador único   |
| nombre      | string | Nombre del curso      |
| descripcion | string | Descripción           |
| docente     | string | Profesor encargado    |
| categoria   | string | Categoría             |
| duracion    | string | Duración              |
| estudiantes | number | Número de estudiantes |

---

## 👨‍🏫 Docentes

| Campo        | Tipo   | Descripción        |
| ------------ | ------ | ------------------ |
| id           | number | Identificador      |
| nombre       | string | Nombre completo    |
| especialidad | string | Área académica     |
| email        | string | Correo electrónico |
| cursos       | array  | Cursos asignados   |

---

## 🧑‍💼 Administradores

| Campo    | Tipo   | Descripción        |
| -------- | ------ | ------------------ |
| id       | number | Identificador      |
| nombre   | string | Nombre             |
| email    | string | Correo             |
| rol      | string | Rol administrativo |
| permisos | array  | Permisos           |

---

# 💾 Persistencia de Datos

El sistema utiliza **LocalStorage como base de datos simulada**.

| Key             | Descripción              |
| --------------- | ------------------------ |
| cursos          | Lista de cursos          |
| docentes        | Lista de docentes        |
| administradores | Lista de administradores |
| usuarioActivo   | Usuario autenticado      |
| perfil          | Información del perfil   |

---

# 📊 Diagrama Entidad Relación

```text
Docente
  │
  │ 1..N
  ▼
Curso
  │
  │ N..1
  ▼
Administrador
```

---

# 🧩 Módulos del Sistema

| Archivo            | Función                      |
| ------------------ | ---------------------------- |
| data.js            | Inicializa datos del sistema |
| cursos.js          | Gestión de cursos            |
| docentes.js        | Gestión de docentes          |
| administradores.js | Gestión de administradores   |
| dashBoard.js       | Lógica del dashboard         |
| profile.js         | Gestión del perfil           |
| basicFuntions.js   | Funciones reutilizables      |

---

# 🔄 Flujo del Sistema

```text
Inicio
 ↓
Carga de datos iniciales
 ↓
Dashboard
 ↓
Cursos
Docentes
Administradores
Perfil
```

---

# ⚙ Instalación

Clonar el repositorio

```bash
git clone https://github.com/zappytw/LMS-FAYADJOEL-DIAZJUAN.git
```

Entrar al proyecto

```bash
cd LMS-FAYADJOEL-DIAZJUAN
```

Abrir aplicación

```text
index.html
```

---

# ▶ Uso

1️⃣ Abrir la aplicación en el navegador
2️⃣ Acceder al dashboard
3️⃣ Administrar cursos
4️⃣ Administrar docentes
5️⃣ Administrar administradores
6️⃣ Editar perfil

---

# 🧠 Buenas Prácticas

✔ Código modular
✔ Separación de responsabilidades
✔ Organización por carpetas
✔ Reutilización de funciones
✔ Persistencia de datos

---

# 🛣 Roadmap

Mejoras futuras:

* Backend con Node.js
* Base de datos MongoDB
* Sistema de autenticación
* Registro de estudiantes
* Sistema de evaluaciones
* API REST

---

# 🤝 Contribución

1️⃣ Fork del repositorio

2️⃣ Crear rama

```bash
git checkout -b feature/nueva-funcionalidad
```

3️⃣ Commit

```bash
git commit -m "Nueva funcionalidad"
```

4️⃣ Push

```bash
git push origin feature/nueva-funcionalidad
```

5️⃣ Crear Pull Request

---

# 👨‍💻 Autores

Proyecto desarrollado por:

**Fayad**
**Joel**
**Juan**

---

# 📜 Licencia

Proyecto desarrollado con fines **educativos y académicos**.
