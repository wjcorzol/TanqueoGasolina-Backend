const mongoose = require('mongoose');

const collection = 'ingreso';

const ingresoLoteSchema = {
    nombreUsuario: {type:String, required:[true, 'El nombre de usuario es obligatorio'], unique:true},
    tipoCombustible: {type:Boolean, required:[true, 'El tipo de combustible es obligatorio']},
    galones: {type:Float32Array, required:[true, 'El número de galones es obligatorio']},
    fechaIngreso: {type:Date, required:[true, 'La fecha de ingreso es obligatoria']},
    costo: {type:Float32Array, required:[true, 'El costo es obligatorio']},
    fechaTerminacion: {type:DateView, required:[true, 'La fecha de terminación es obligatoria']}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(ingresoSchema, options);

const Ingreso = mongoose.model(collection, schema);

module.exports = Ingreso;
