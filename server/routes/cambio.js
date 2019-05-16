var express = require('express');
var router = express.Router();

var cambioController = require('../controllers/cambio.controller');

router.post('/cambio', cambioController.cambio);
router.post('/cambio-lista', cambioController.cambioLista);
module.exports = router;
