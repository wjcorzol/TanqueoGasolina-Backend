const Ingreso = require('./model')

const list = async (req, res) => {
    const ingreso = await Ingreso.find();
    res.status(200).json({ ingreso })
}

const ingresarCombustible = async (req, res) => {
    const { tipoCombustible, galones, fechaIngreso, precio, fechaTerminacion} = req.body;

    if(galones > 0){
        const nuevoIngreso = new Ingreso({
            tipoCombustible, 
            galones, 
            fechaIngreso, 
            precio, 
            fechaTerminacion
        });
        nuevoIngreso.save().then((combustibleIngresado) => {
            res.status(200).json({combustibleIngresado});
        });    
    }else{
        res.status(400).json({error:'El valor a ingresar no puede ser menor o igual a 0'});
    }
}

module.exports = {
    ingresarCombustible,
    list
}