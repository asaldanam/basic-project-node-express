// Definición de variables de entorno en el sistema para configurar express
require('dotenv').config(); 

// Importar express y configurarlo
var express = require('express'); 
var serverExpress = express(); // Crear la instancia del express (como hacer un new)
var mongoose = require('mongoose');

// Configurar la pipeline (los módulos del middleware)
var configServer = require('./config_server_express/pipeline_middlewares'); 

//#region --------------------- configuración SERVIDOR WEB EXPRESS ---------------------
configServer(serverExpress);

serverExpress.listen(3000); // Puerto por el que escucha la aplicación servidor
//#endregion

//#region --------------------- configuración CONEXIÓN A MONGODB SERVER ---------------------
mongoose.connect(process.env.CONNECTION_MONGODB, (err) => { // process.env es para usar las variables de entorno
  if(!err) {
    console.log(`\n\n CONECTADOS AL SERVIDOR MONGODB, A LA BD DE DOMINOS, ${process.env.CONNECTION_MONGODB}`);
  } else {
    console.log('\n\nERROR EN CONEXIÓN A MONGODB: ', err);
  }
});
//#endregion