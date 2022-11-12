# PASOS PARA CREAR EL PROYECTO

## INSTALAR LIBRERÍAS
- instalar dependencias: `npm install`

- crear variables de entorno dentro de node (caracteristicas que no quieres que se vean): `npm install dotenv --save`
- procesar las cookies de sesión de forma más clara: `npm install cookie-parser --save`
- librería de express `npm install express --save` 
- configurar el estado de sesión del middleware `npm install express-session --save` 
- mongoose es el paqeute que vamos a utilizar para atacar la bd: `npm install mongoose --save`
- motor de vistas: `npm install express-handlebars --save`
- gestión de datos mandados a través del body: `npm install body-parser --save`
- intalar node-mailjet: `npm install node-mailjet --save`
- bcrypt para codificar password: `npm install bcrypt --save`
- nodemon para que el servidor se actualice cada vez que guardas un fichero: `npm install nodemon`

## FICHERO .GITIGNORE
- Crear el fichero `.gitignore` para meter todo lo que se va a ignorar cuando se suban los cambios a git.
```
  .mongodb
  node_modules
```

## FICHERO .ENV
- Crear fichero `.env` para guardar las variables de entorno
```
  # Claves de Mailjet
  API_KEY_MAILJET='6cdc8549c4e0ac1c75dbbb35f1e09a03'
  SECRET_KEY_MAILJET='952817dcf38fb7d01d0af43a4a29c3da'

  # Conexión con MongoDB
  CONNECTION_MONGODB='mongodb+srv://sara:4xm852Q7rsC6EN2P@dawmongocluster.vqbqhj3.mongodb.net/AgapeaDB?retryWrites=true&w=majority'

  # Usa la string para cifrar las cookies (pasa sacar el hash)
  SECRETKEY_SESSIONS_ID='Clave para cifrar las cookies de session en el navegador del cliente 3q0830w58320riodsaifajslfmasir023u503'
```

## FICHERO SERVER.JS
- Crear fichero `server.js` para meter la configuración general del proyecto

## CREAR LA ESTRUCTURA DE CARPETAS DEL PROYECTO
- `config_server_express`
- `controllers`
- `models`
- `public`
  - `css`
  - `images`
  - `js`
- `views`

## CONFIGURAR LA PIPELINE
- Crear un fichero `pipeline_middlewares.js`. La pipeline consiste en una cadena de procesos conectados de forma tal que la salida de cada elemento de la cadena es la entrada del próximo.
- Hay que crear una función en la que se vayan encadenando cada uno de los módulos del middleware que se van a usar en el proyecto.
- Los primeros módulos están ya predefinidas las funciones (es decir, no se ve la estructura que debería tener el módulo porque lo hace por dentro (req,res,next)), porque son de las librerías que se han importado al principio.
- Se usan en la aplicación entera

## CONFIGURACIÓN DE ROUTIGN
- Crear el fichero `routin.js` donde van a ir todos los endpoints de la aplicación.