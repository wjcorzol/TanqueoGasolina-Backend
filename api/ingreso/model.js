const mongoose = require('mongoose');

const collection = 'ingreso';

const ingresoLoteSchema = {
    
    tipoCombustible: {type:String, required:[true, 'El tipo de combustible es obligatorio']},
    galones: {type:Number, required:[true, 'El número de galones es obligatorio']},
    fechaIngreso: {type:Date, required:[true, 'La fecha de ingreso es obligatoria']},
    precio: {type:Number, required:[true, 'El costo es obligatorio']},
    fechaTerminacion: {type:Date}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(ingresoLoteSchema, options);

const Ingreso = mongoose.model(collection, schema);

module.exports = Ingreso;
