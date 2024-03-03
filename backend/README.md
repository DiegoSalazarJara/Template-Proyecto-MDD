> [!IMPORTANT]
> Recuerden que deben cambiar el contenido del README.md y eliminar los archivos backend.md y frontend.md, debido a que son instrucciones de como utilizar el template.

# Backend Template Metodología de Desarrollo 🧑‍🚀

### Instrucciones para crear el repositorio 📝

- Cuando creen un nuevo repositorio, les recomiendo utilizar la opción de **Repository template** y seleccionar el repositorio **DiegoSalazarJara/Template-Proyecto-MDD**.
- Le asignan el nombre que desean al repositorio, por ejemplo: Proyecto-MDD.
- Le añaden una descripción del proyecto.
- Mantengan el repositorio público y le dan a **Create repository**.

### Pasos a seguir 📝

1. Una vez creado el repositorio, ir al boton verde **<> Code** y copien la URL proporcionada.
2. Vayan al escritorio y crean una carpeta.
3. Hagan click derecho sobre la carpeta y abran Git Bash.
4. En la Git Bash, escriban: `git clone <URL> .`
5. Después de escribir el comando para clonarlo, escribir en la Git Bash: `code .`
6. Empezar a codear!

### Estructura de carpetas 📚

```bash

├── backend
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   ├── .env.example
│   │   │   ├── configDB.js
│   │   │   └── configEnv.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   ├── models
│   │   │   └── user.model.js
│   │   ├── routes
│   │   │   ├── auth.route.js
│   │   │   └── index.routes.js
│   │   └── index.js
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── .prettierrignore
│   ├── .prettierrc
│   └── package-lock.json
└── └── package.json
```

### Instrucciones de uso 📝

Una vez clonado el repositorio y con el Visual Studio Code abierto, sigan los siguientes pasos:

1. Vayan al directorio backend con: `cd backend`
2. Ejecuten `npm i` o `npm install` para instalar las dependecias
3. Agreguen el archivo .env a la carpeta **config** junto con su configuración correspondiente.
4. Una vez agregado el archivo .env, pueden ejecutar el comando: `npm run dev` o `npm start` para correr el backend.
5. Recuerden que pueden utilizar **Postman**, **Insomnia** o **Thunder Client** para realizar las peticiones a la API.

## Dependencias utilizadas 🛠️

- Express: Framework de aplicación web para Node.js.
- Mongoose: Biblioteca de modelado de objetos MongoDB para Node.js.
- Dotenv: Módulo que carga variables de entorno desde un archivo .env en process.env.
- Cors: Middleware de Express para habilitar el control de acceso HTTP.
- Morgan: Middleware de registro de solicitudes HTTP para Node.js.
- Nodemon: Herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación cuando se detectan cambios en el directorio.
- Bcryptjs: Biblioteca para el hash de contraseñas.
- Eslint: Herramienta de linting para JavaScript.
- Prettier: Formateador de código JavaScript.