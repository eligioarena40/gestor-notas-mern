# 📝 Gestor de Notas Full-Stack (MERN)

Aplicación web completa para la gestión de notas personales con operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar), sincronización en tiempo real entre dispositivos y una interfaz oscura moderna y responsiva.

## 🚀 Características principales
- **Creación y lectura de notas:** Formulario validado y visualización en tarjetas adaptables a cualquier pantalla.
- **Sincronización en tiempo real:** Actualización automática e instantánea de las tarjetas en todos los dispositivos conectados mediante WebSockets (`Socket.IO`), sin necesidad de recargar la página.
- **Edición completa:** Carga automática de datos existentes para modificar título y descripción.
- **Eliminación segura:** Modal de confirmación personalizado integrado con el diseño de la interfaz antes de borrar registros.
- **Notificaciones visuales:** Alertas de éxito y error en cada acción utilizando `React Toastify`.

## 🛠️ Tecnologías utilizadas
**Frontend:**
- React + Vite
- React Router DOM
- Axios
- Socket.IO Client
- Tailwind CSS & DaisyUI
- Lucide React (Iconos)

**Backend:**
- Node.js & Express
- Socket.IO
- MongoDB & Mongoose

## 📦 Instalación y ejecución local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/eligioarena40/gestor-notas-mern.git
   ```

2. **Configurar el Backend:**
   ```bash
   cd back
   npm install
   ```
   Crea un archivo `.env` en la carpeta `back` con tu conexión a MongoDB y la URL permitida para el frontend:
   ```env
   MONGODB_URI=tu_cadena_de_conexion_mongodb
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   ```
   Inicia el servidor: `npm run dev`

3. **Configurar el Frontend:**
   ```bash
   cd front
   npm install
   ```
   Crea un archivo `.env` en la carpeta `front`:
   ```env
   VITE_API_URL=http://localhost:3001
   ```
   Inicia la aplicación: `npm run dev`

## 💡 Créditos y mejoras propias
Proyecto basado inicialmente en el tutorial del canal @rocodev23 *"Proyecto Full Stack Construye una App de Notas con React js y MERN desde Cero a produccion"*, el cual llegaba hasta la creación y listado de notas. Fue **extendido y finalizado de forma independiente** incorporando:
- Sincronización bidireccional en tiempo real entre múltiples clientes y pestañas utilizando **Socket.IO**.
- Vista y lógica completa de actualización de notas (`EditNotePage`).
- Funcionalidad de eliminación conectada a la base de datos (`DELETE`).
- Componente reutilizable de modal de confirmación (`ConfirmModal`) estilizado con DaisyUI.
- Manejo de errores y alertas de usuario en todas las peticiones HTTP.
