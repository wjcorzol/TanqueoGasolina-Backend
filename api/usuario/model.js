const mongoose = require('mongoose');

const collection = 'usuario';

const usuarioSchema = {
    nombre: {type:String, required:[true, 'El nombre es obligatorio']},
    tipoDocumento: {type:String, required:[true, 'El tipo de documento es obligatorio']},
    numeroDocumento: {type:Number, required:[true, 'El número de documento es obligatorio'], unique:true},
    nacimiento: {type:Date, required:[true, 'La fecha de nacimiento es obligatoria']},
    sexo: {type:String},
    ciudad: {type:String},
    usuario: {type:String, required:[true, 'El nombre de usuario es obligatorio'], unique:true},
    contraseña:  {type:String, required:[true, 'La contraseña es obligatoria']},
    rol:  {type:String, default:'usuario externo'},
    saldoEfectivo:  {type:Number, default:0},
    saldoPuntos:  {type:Number, default:0}
}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(usuarioSchema, options);

const Usuario = mongoose.model(collection, schema);

module.exports = Usuario;
