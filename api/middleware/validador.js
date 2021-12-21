const validarCreacionUsuario = (req, res, next) => {
    const { nombre, tipoDocumento, numeroDocumento, nacimiento, sexo, ciudad, usuario, contraseña} = req.body;
    
    if(!nombre || !tipoDocumento || !numeroDocumento || !nacimiento || !usuario || !contraseña){
        res.status(400).json({error:'Hay uno o más campos vacios'});
        
    }else{
        next();
    }
}

const validarCreacionVehiculo = (req, res, next) => {
    const { placaVehiculo, tipoVehiculo, marcaVehiculo} = req.body;
    
    if(!placaVehiculo || !tipoVehiculo || !marcaVehiculo){
        res.status(400).json({error:'Hay uno o más campos vacios'});
        
    }else{
        next();
    }
}

module.exports = {
    validarCreacionUsuario,
    validarCreacionVehiculo
}