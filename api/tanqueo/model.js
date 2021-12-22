const mongoose = require('mongoose');

const collection = 'tanqueo';

const tanqueoSchema = {
    usuario: {type:String, required:[true, 'Usted no ha iniciado sesión']},
    placaVehiculo: {type:String, required:[true, 'La placa del vehiculo es obligatoria']},
    tipoCombustible: {type:String, required:[true, 'El tipo de combustible es obligatorio']},
    galones: {type:Number, required:[true, 'El número de galones es obligatorio']},
    medioDePago: {type:String, required:[true, 'El medio de pago es obligatorio']},
    precioGalon: {type:Number},
    valorTotal: {type:Number}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(tanqueoSchema, options);

const Tanqueo = mongoose.model(collection, schema);

module.exports = Tanqueo;
