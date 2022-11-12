var express = require('express');
var router = express.Router();

var PaginaConFormularioController = require('../controllers/PaginaConFormularioController');

// localhost:3000/ok
router.route('/ok')
      .get((req, res) => res.status(200).send('TODO OK'));

router.route('/PaginaConFormulario')
      .get(PaginaConFormularioController.get)
      .post(PaginaConFormularioController.post);
      
module.exports = function(servidorExpress) {
  servidorExpress.use('/', router);
};