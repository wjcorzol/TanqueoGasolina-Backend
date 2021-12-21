// Recolecta routers de la api 

const express = require('express');
const usuario = require('./usuario/router');
const vehiculo = require('./vehiculo/router');

const api = express();

api.use('/usuario', usuario);
api.use('/vehiculo', vehiculo);  

module.exports = api;