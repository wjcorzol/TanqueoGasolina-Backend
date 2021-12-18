const mongoose = require('mongoose');

const collection = 'users';
const collection = 'vehiculos';
const collection = 'taqueos';
const collection = 'ingresos';

const userSchema = {
    nombre: {type:String, required:[true, 'El nombre es obligatorio']},
    tipoDocumento: {type:Boolean, required:[true, 'El tipo de documento es obligatorio']},
    numeroDocumento: {type:String, required:[true, 'El número de documento es obligatorio'], unique:true},
    nacimiento: {type:DateView, required:[true, 'La fecha de nacimiento es obligatoria']},
    sexo: {type:Boolean},
    ciudad: {type:String},
    nombreUsuario: {type:String, required:[true, 'El nombre de usuario es obligatorio'], unique:true},
    contraseña:  {type:String, required:[true, 'La contraseña es obligatoria']},
    rol:  {type:Boolean},
    saldoEfectivo:  {type:Float32Array},
    saldoPuntos:  {type:Float32Array}
}

const vehiculoSchema = {
    nombreUsuario: {type:String, required:[true, 'El nombre de usuario es obligatorio'], unique:true},
    tipoVehiculo: {type:Boolean, required:[true, 'El tipo de vehículo es obligatorio']},
    marcaVehiculo: {type:String, required:[true, 'La marca del vehículo es obligatorio']},
    placaVehiculo: {type:String, required:[true, 'La placa del vehiculo es obligatoria']},
    estado: {type:String, Boolean}
}

const tanquearSchema = {
    placaVehiculo: {type:String, required:[true, 'La placa del vehiculo es obligatoria']},
    tipoCombustible: {type:Boolean, required:[true, 'El tipo de combustible es obligatorio']},
    galones: {type:Float32Array, required:[true, 'El número de galones es obligatorio']},
    medioDePago: {type:Boolean, required:[true, 'El medio de pago es obligatorio']},
    precioGalon: {type:Float32Array, required:[true, 'El precio del galon es obligatorio']},
    valorTanqueo: {type:Float32Array, required:[true, 'El valor del tanqueo es obligatorio']}
}

const ingresarLoteSchema = {
    nombreUsuario: {type:String, required:[true, 'El nombre de usuario es obligatorio'], unique:true},
    tipoCombustible: {type:Boolean, required:[true, 'El tipo de combustible es obligatorio']},
    galones: {type:Float32Array, required:[true, 'El número de galones es obligatorio']},
    fechaIngreso: {type:DateView, required:[true, 'La fecha de ingreso es obligatoria']},
    costo: {type:Float32Array, required:[true, 'El costo es obligatorio']},
    fechaTerminacion: {type:DateView, required:[true, 'La fecha de terminación es obligatoria']}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(usersSchema, options);

const User = mongoose.model(collection, schema);

module.exports = User;
