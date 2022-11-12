var express = require('express');
var router = express.Router();

var LoginController = require('../controllers/LoginController');

// localhost:3000/ok
router.route('/ok')
      .get((req, res) => res.status(200).send('TODO OK'));

router.route('/login')
      .get(LoginController.get)
      .post();
      
      
module.exports = function(servidorExpress) {
  servidorExpress.use('/', router);
};