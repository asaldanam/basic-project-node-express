// Módulo de express que va a servir para configurar la pipeline de la intancia del servidor express creado en el módulo principal: server.js
// Este módulo va a exportar una función que recibe como parámetro el servidor express a configurar y dentro de la misma se configura la pipeline
// https://www.npmjs.com/

// Importar paquetes
var express = require('express');

var cookieParser = require('cookie-parser');
var bodyParser = require ('body-parser');
var session = require('express-session');
var viewEngine = require('express-handlebars');
var configRouting = require('./routingMAIN');

module.exports = function(servidorExpress) {
  // Módulos middleware a configurar en la pipeline (funciones que admites 3 parámetros: (req, rest, next))
  servidorExpress.use( cookieParser() ); // <--- 1º módulo middleware: gestión de cookies de sesión mandadas por cliente (cookie-parser)
                                         // Coge la cookie de las cabeceras http del http-request del cliente y crea un objeto en req.cookie
  servidorExpress.use( bodyParser.urlencoded({ extended: false }) ); // <--- 2º módulo middleware: gestión de los datos mandados por el cliente por POST (formularios, etc) (body-parser)
                                                                     // Los mete en variable req.body
                                                                     // El 1º es para datos tipo formulario (x-www-form-urlencoded)
  servidorExpress.use( bodyParser.json() );                          // El 2º es para datos mandados en formato JSON
  
  servidorExpress.use( // <--- 3º módulo middleware: configuración del estado de sesión en el servidor express (express-session)
    session(
      {
        secret: process.env.SECRETKEY_SESSIONS_ID, // coger la variable de entorno para cifrar las cookies de sesión
        resave: false,
        saveUninitialized: true,
        cookie: {// configurar la cookie que se va a meter
          path:'/',
          httpOnly: true, 
          maxAge: 360000, // duración: 1 hora, en milisegundos
          secure: false // que la cookie no se mande por https (para que sea https es true)
        }
      }
    )
   ); 
 
  // me creo una variable para el servidor express llamada 'views' donde está el directorio de las vistas handlebars
  servidorExpress.set('views', __dirname + '/../views');
  
  servidorExpress.engine('hbs', viewEngine.create( // <--- 4º módulo middleware: configuración de view.engine (motor de vistas para el servidor) (express.HANDLEBARS)
  {                                            // Se usa el métoro .engine de express
    // json con opciones de configuración de handlebars
    extname:'hbs',
    defaultLayout:'__Layout',
    layoutsDir: __dirname + '/../views/shared/Layouts',
    partialsDir: __dirname + '/../views/shared/Partials',
    helpers: { } // funciones javascript que pueden ser invocadas desde una vista hadlebars
  }
  ).engine); 

  servidorExpress.use('/public', express.static('public', { index: false }));

  configRouting(servidorExpress); // <--- 5º módulo middlewate: módulo de enrutamiento (routing-module)
                                                      
};