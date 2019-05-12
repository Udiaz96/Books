var express = require('express');
var router = express.Router();
var usuarioController = require('../controller/usuarioController');

router.get('/listaUsuarios', usuarioController.listaUsuarios);
router.get('/listaUsuarios/:id', usuarioController.unUsuario);
router.post('/agregarUsuario', usuarioController.agregarUsuario);
router.put('/actuaUsu/:id', usuarioController.updateUsuario);
router.delete('/eliminarUsuario/:id', usuarioController.eliminaUsuario);
module.exports = router;
