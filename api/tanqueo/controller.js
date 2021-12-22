const Tanqueo = require('./model')


const list = async (req, res) => {
    const tanqueos = await Tanqueo.find();
    res.status(200).json({ tanqueos })
}

const realizarTanqueo = async (req, res) => {
    const { usuario, tipoCombustible, placaVehiculo, galones,medioDePago} = req.body;
    

    if(galones > 0){
        const nuevoTanqueo = new Tanqueo({
            usuario, 
            tipoCombustible, 
            placaVehiculo, 
            galones,
            medioDePago
        });
        nuevoTanqueo.save().then((tanqueoCreado) => {
            res.status(200).json({tanqueoCreado});
        });    
    }else{
        res.status(400).json({error:'Ingresa un número de galones mayor a 0'});
    }
}

module.exports = {
    realizarTanqueo,
    list
}