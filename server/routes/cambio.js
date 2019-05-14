var express = require('express');
var router = express.Router();

var cambioController = require('../controllers/cambio.controller');

router.post('/comic', cambioController.cambio);
router.post('/comic', cambioController.cambioLista);
module.exports = router;
