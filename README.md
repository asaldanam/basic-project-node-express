# Uso de NODE con Express server
El proyecto parte de una template generada desde [scalmunia/BoilerplateNodeExpress](https://github.com/scalmunia/BoilerplateNodeExpress)

## Crear un Layour (si no existe ya):
Crear el siguiente fichero: `views/shared/Layouts/__Layout.hbs` e introducir dentro:
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  {{{body}}}
</body>
</html>
```

## Caso 1: Vista renderizada por el servidor
Este caso se nos da cuando queremos en el servidor renderizar un HTML con handlebars para que al cliente (navegador)
le llegue ya el HTML totalmente renderizado:

1. Creamos en `/controllers` nuestro controlador. Podemos usar `__PlantillaController.js` como plantilla.

2. Registramos con qué ruta queremos que el controllador se llame, para ello tendremos que añadirlo a `routingMAIN.js`. 
   Esto hará que el controlador se pueda llamar tanto desde GET como POST a la ruta http://localhost:3000/MiPagina
    ```js
    // config_server_express/routingMAIN.js

    var MiPaginaController = require('../controllers/MiPaginaController');

    router.route('/MiPagina')
          .get(MiPaginaController.get)
          .post(MiPaginaController.post);
    ```

3. Creamos la vista en `/views`. Podemos hacer subcarpetas, y es recomendable que se parezca 
   lo máximo posible a la ruta donde se va a cargar, ejemplo `/views/MiPagina.htbs`

4. En el controllador `/controllers/MiPaginaController.js`, indicamos en la respuesta de express del método GETq ue llame al método render. 
   Podemos en el segundo parámetro indicarle qué propiedades pasar a la vista:
    ```js
    module.exports = {
      get: async (req, res) => {
        const viewData = {
          titulo: 'Mi página'
        };

        res.status(200).render('MiPaginaController.js', viewData);
      },
      //...
    };
    ```

