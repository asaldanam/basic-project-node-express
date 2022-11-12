// Este controlador no está conectado a ninguna ruta, 
// simplemente es una plantilla para copiar y pegar
module.exports = {
  get: async(req, res) => {
    const viewData = {
      // Propiedades para pasar al .hbs aquí
    }
    
    const debug = JSON.stringify(viewData, null, 2);

    // Elegir 1 de entre estas opciones de responder al cliente:

    // Caso 1
    res.status(200).render('__________CAMBIAR_POR_EL_NOMBRE_DE_LA_PLANTILLA.hbs', { ...viewData, debug });

    // Caso 2
    res.status(200).send(viewData);

    // Caso 3
    res.status(302).redirect('http://localhost:3000/_______OTRA_RUTA_A_LA_QUE_REDIRECCIONAR');
  },
  post: async (req, res) => {
    
  }
};