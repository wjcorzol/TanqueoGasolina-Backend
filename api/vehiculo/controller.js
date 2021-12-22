const Vehiculo = require('./model')

const list = async (req, res) => {
    const vehiculos = await Vehiculo.find();
    res.status(200).json({ vehiculos })
}

const crearVehiculo = async (req, res) => {
    const { usuario, tipoVehiculo, marcaVehiculo, placaVehiculo} = req.body;
    const vehiculoEncontrado = await Vehiculo.find({placaVehiculo});

    if(vehiculoEncontrado.length === 0){
        const nuevoVehiculo = new Vehiculo({
            usuario, 
            tipoVehiculo, 
            marcaVehiculo, 
            placaVehiculo
        });
        nuevoVehiculo.save().then((vehiculoCreado) => {
            res.status(200).json({vehiculoCreado});
        });    
    }else{
        res.status(400).json({error:'El vehiculo ya existe'});
    }
}

module.exports = {
    crearVehiculo,
    list
}