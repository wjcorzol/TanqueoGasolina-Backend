const express = require('express');
const {crearVehiculo} = require('./controller');
const {validarCreacionVehiculo} = require('../middleware/validador');

const router = express.Router();

router.route('/').post(validarCreacionVehiculo, crearVehiculo);

module.exports = router;