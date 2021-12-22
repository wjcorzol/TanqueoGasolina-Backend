const mongoose = require('mongoose');

const collection = 'saldo';

const saldoSchema = {
    usuario: {type:String, required:[true, 'Usted no ha iniciado sesión']},
    ingresoEfectivo: {type:Number, required:[true, 'El tipo de vehículo es obligatorio']},
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(saldoSchema, options);

const Saldo = mongoose.model(collection, schema);

module.exports = Saldo;
