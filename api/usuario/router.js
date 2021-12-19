const express = require('express');
const {crearUsuario, list} = require('./controller');
const {validarCreacionUsuario} = require('../middleware/validador');

const router = express.Router();

router.route('/').get(list).post(validarCreacionUsuario, crearUsuario);

module.exports = router;