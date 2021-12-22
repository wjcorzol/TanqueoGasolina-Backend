const express = require('express');
const {crearVehiculo, list} = require('./controller');
const {validarCreacionVehiculo} = require('../middleware/validador');

const router = express.Router();

router.route('/').get(list)
router.route('/registro').post(validarCreacionVehiculo, crearVehiculo);

module.exports = router;