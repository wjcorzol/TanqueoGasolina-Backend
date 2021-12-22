// Recolecta routers de la api 

const express = require('express');
const usuario = require('./usuario/router');
const vehiculo = require('./vehiculo/router');
const saldo = require('./saldo/router');
const tanqueo = require('./tanqueo/router');
const ingreso = require('./ingreso/router');

const api = express();

api.use('/usuario', usuario); 
api.use('/vehiculo', vehiculo);
api.use('/saldo', saldo);
api.use('/tanqueo', tanqueo);
api.use('/ingreso', ingreso);

module.exports = api;