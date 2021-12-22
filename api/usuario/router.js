const express = require('express');
const {crearUsuario, list, login} = require('./controller');
const {validarCreacionUsuario} = require('../middleware/validador');

const router = express.Router();

router.route('/').get(list)
router.route('/login').post(login);
router.route('/registro').post(validarCreacionUsuario, crearUsuario);

module.exports = router;