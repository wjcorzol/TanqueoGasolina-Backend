const express = require('express');
const {crearUsuario} = require('./controller');
const {validarCreacionUsuario} = require('../middleware/validador');

const router = express.Router();

router.route('/').post(validarCreacionUsuario, crearUsuario);

module.exports = router;