// He tenido que instalar 'npm install node-fetch@2' para poder usar fetch en node con require.
var fetch = require('node-fetch');

module.exports = {
  /**
   * Caso 1A: ruta que devuelve un html al llamarla a "GET /PaginaConFormulario"
   * @link http://localhost:3000/PaginaConFormulario 
   * */
  get: async (req, res) => {

    // OJO!: tenemos que hacer 'npm install node-fetch@2' e importarlo via "require()" para poder usar fetch
    //
    // Lo primero, vamos a hacer una petición (en el lado del servidor) a PokeAPI
    // para obtener los 9 primeros pokemon y mandárselos a la vista.
    const pokeAPIResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0').then(res => res.json())
    
    // Mapeamos el "results" para obtener sólo sus nombres:
    const pokemonList = pokeAPIResponse.results.map(pokemon => pokemon.name);
    
    // Conformamos un objeto "viewData" con todas las variables que queremos pasar a la vista (caso "pokemonList").
    // Podemos también simplemente declarar la propiedad y darle un valor dentro objeto (caso "titulo" y "subtitulo")
    const viewData = {
      titulo: 'Inscribir pokemon',
      subtitulo: 'Con este formulario puedes inscribir tus pokemon.',
      pokemonList,
    }

    // El debug consiste en pasar todo el viewData a string.
    // Los parámetros `null, 2` sirven para que el JSON stringificado se va indentado y bonito
    const debug = JSON.stringify(viewData, null, 2);

    // Método ".render" usado por handlebars para manejar vistas
    //
    // Primer parámetro: La ruta hacia la vista desde el `layoutsDir`
    // definido en`/config_server_express/pipeline_middlewares.js``
    //
    // Segundo parámetro: objeto con las propiedades que se quieren pasar a la vista.
    // Aquí lo he desesctructurado con el spread operator(...) para poderle pasar también el debug.
    //
    res.status(200).render('PaginaConFormulario.hbs', { ...viewData, debug });
  },
  post: async (req, res) => {
    // WORK IN PROGRESS
    console.log(req.body)
    res.status(200).send(req.body);
  }
};