const mongoose = require('mongoose');

const collection = 'vehiculos';

const vehiculoSchema = {
    usuario: {type:String, required:[true, 'Usted no ha iniciado sesión']},
    tipoVehiculo: {type:String, required:[true, 'El tipo de vehículo es obligatorio']},
    marcaVehiculo: {type:String},
    placaVehiculo: {type:String, required:[true, 'La placa del vehiculo es obligatoria']},
    estado: {type:String, default:'Activo'}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(vehiculoSchema, options);

const Vehiculo = mongoose.model(collection, schema);

module.exports = Vehiculo;
