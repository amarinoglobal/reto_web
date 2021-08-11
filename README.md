# THE CAVE PHONE
***

# Aplicación web para compra y venta de teléfonos moviles.
***

# Actualmente en desarrollo:
    -Pendiente de añadir la edición de telefonos moviles.
    -Completar avisos del sistema, solo se visualiza al cerrar sesión.
    -Completar sistema de compra, redirecciona al listado de telefonos al dar click en comprar.
    -Posibles escalabilidades.
***

# Desarrollado en un stack MERN (MongoDB,Express.js,Node.js)
***


# Listado de endpoints desarrollados:    
***
```
Path	                Description
/                           Index
/telefonos                  Registra un nuevo telefono movil
/iniciar-sesión             Inicio de sesión de usuario
/registro                   Registro de nuevo usuario
/mi-perfil                  Mi perfil
/telefonos/crear            Crear nuevo telefono movil
/telefonos/detalle/:id      Detalle de telefono movil
```
***

# Instalación
***
Para instalar sigue los pasos a continuación. 
```
$ git clone https://https://github.com/amarinoglobal/reto_web/
$ cd reto_web/server
$ npm install
$ cd ..
$ cd client
$ npm install

#Crear archivo .env en /reto_web/server con las siguientes lineas:
***
PORT=5000
MONGODB_URI=mongodb://localhost/server
SESS_SECRET=TheCavePhone
DOMAIN_LOCAL=http://localhost:3000
CLOUDINARY_NAME="tu cloudinary name"
CLOUDINARY_KEY="tu cloudinary key"
CLOUDINARY_SECRET="tu cloudinary secret"

# Correr servidor y cliente 
***
$ cd /server
$ npm run dev

En otra terminal escribir:

$ cd /client
$ npm start
***

Demo: 


***
