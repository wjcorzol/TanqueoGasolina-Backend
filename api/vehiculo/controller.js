const vehiculo = require('./model')

const crearVehiculo = async (req, res) => {
    const { placaVehiculo, tipoVehiculo, marcaVehiculo} = req.body;
    const vehiculoEncontrado = await vehiculo.find({placaVehiculo});

    if(vehiculoEncontrado.length === 0){
        const nuevoVehiculo = new Vehiculo({
            placaVehiculo,
            tipoVehiculo,
            marcaVehiculo
        });
        nuevoVehiculo.save().then((vehiculoCreado) => {
            res.status(200).json({vehiculoCreado});
        });    
    }else{
        res.status(400).json({error:'El vehiculo ya existe'});
    }
}

module.exports = {
    crearVehiculo
}