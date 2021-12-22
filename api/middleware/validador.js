const validarCreacionUsuario = (req, res, next) => {
    const { nombre, tipoDocumento, numeroDocumento, nacimiento, sexo, ciudad, usuario, contraseña} = req.body;
    
    if(!nombre || !tipoDocumento || !numeroDocumento || !nacimiento || !usuario || !contraseña){
        res.status(400).json({error:'Hay uno o mas campos vacios'});
        
    }else{
        next();
    }
}

const validarCreacionVehiculo = (req, res, next) => {
    const { usuario,tipoVehiculo, marcaVehiculo, placaVehiculo} = req.body;
    
    if(!usuario || !placaVehiculo || !tipoVehiculo || !marcaVehiculo){
        res.status(400).json({error:'Hay uno o más campos vacios'});
        
    }else{
        next();
    }
}

const validarCreacionTanqueo = (req, res, next) => {
    const { usuario, tipoCombustible, placaVehiculo, galones, medioDePago} = req.body;

    if(!usuario || !placaVehiculo || !tipoCombustible || !galones || !medioDePago){
        res.status(400).json({error:'Hay uno o más campos vacios'});

    }else{
        next();
    }
}

module.exports = {
    validarCreacionUsuario,
    validarCreacionVehiculo
}