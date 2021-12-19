// Recolecta routers de la api 

const express = require('express');
const usuario = require('./usuario/router');

const api = express();

api.use('/usuario', usuario); 

module.exports = api;