var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');

router.get('/listaUsuarios', usuarioController.listaUsuarios);
router.get('/listaUsuarios/:id', usuarioController.unUsuario);
router.post('/agregarUsuario', usuarioController.agregarUsuario);
router.put('/actuaUsu/:id', usuarioController.updateUsuario);
router.delete('/eliminarUsuario/:id', usuarioController.eliminaUsuario);
router.post('/auth',usuarioController.authUsuario);
module.exports = router;
