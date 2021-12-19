const mongoose = require('mongoose');

const collection = 'tanqueo';

const tanqueoSchema = {
    placaVehiculo: {type:String, required:[true, 'La placa del vehiculo es obligatoria']},
    tipoCombustible: {type:Boolean, required:[true, 'El tipo de combustible es obligatorio']},
    galones: {type:Float32Array, required:[true, 'El número de galones es obligatorio']},
    medioDePago: {type:Boolean, required:[true, 'El medio de pago es obligatorio']},
    precioGalon: {type:Float32Array, required:[true, 'El precio del galon es obligatorio']},
    valorTanqueo: {type:Float32Array, required:[true, 'El valor del tanqueo es obligatorio']}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(tanqueoSchema, options);

const Tanqueo = mongoose.model(collection, schema);

module.exports = Tanqueo;
