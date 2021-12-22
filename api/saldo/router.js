const express = require('express');
const {ingresarSaldo, list} = require('./controller');


const router = express.Router();

router.route('/').get(list)
router.route('/ingresar').post(ingresarSaldo);

module.exports = router;