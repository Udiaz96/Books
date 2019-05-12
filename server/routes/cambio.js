var express = require('express');
var router = express.Router();

var cambioController = require('../controllers/cambio.controller');

router.put('/comic', cambioController.cambio);
module.exports = router;
