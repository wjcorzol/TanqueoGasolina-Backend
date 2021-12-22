const express = require('express');
const {realizarTanqueo, list} = require('./controller');


const router = express.Router();

router.route('/').get(list)
router.route('/realizartanqueo').post(realizarTanqueo);

module.exports = router;