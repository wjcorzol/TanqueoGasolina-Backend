const Saldo = require('./model')

const list = async (req, res) => {
    const saldos = await Saldo.find();
    res.status(200).json({ saldos })
}

const ingresarSaldo = async (req, res) => {
    const { usuario, ingresoEfectivo} = req.body;

    if(ingresoEfectivo > 0){
        const nuevoSaldo = new Saldo({
            usuario, 
            ingresoEfectivo
        });
        nuevoSaldo.save().then((saldoIngresado) => {
            res.status(200).json({saldoIngresado});
        });    
    }else{
        res.status(400).json({error:'El valor a ingresar no puede ser menor o igual a 0'});
    }
}

module.exports = {
    ingresarSaldo,
    list
}