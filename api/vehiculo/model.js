const mongoose = require('mongoose');

const collection = 'vehiculos';

const vehiculoSchema = {
    nombreUsuario: {type: mongoose.Schema.Types.ObjectId, ref: "usuario"},
    tipoVehiculo: {type:Boolean, required:[true, 'El tipo de vehículo es obligatorio']},
    marcaVehiculo: {type:String, required:[true, 'La marca del vehículo es obligatorio']},
    placaVehiculo: {type:String, required:[true, 'La placa del vehiculo es obligatoria']},
    estado: {type:Boolean, required: true, default: true}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(vehiculoSchema, options);

const Vehiculo = mongoose.model(collection, schema);

module.exports = Vehiculo;
