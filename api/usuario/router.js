const express = require('express');
const {crearUsuario, list, login} = require('./controller');
const {validarCreacionUsuario} = require('../middleware/validador');

const router = express.Router();

router.route('/').get(list).post(validarCreacionUsuario, crearUsuario);
router.route('/login').post(login);

module.exports = router;