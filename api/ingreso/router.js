const express = require('express');
const {ingresarCombustible, list} = require('./controller');


const router = express.Router();

router.route('/').get(list)
router.route('/ingresar').post(ingresarCombustible);

module.exports = router;