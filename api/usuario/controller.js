const usuario = require('./model')

const crearUsuario = async (req, res) => {
    const { nombre, tipoDocumento, numeroDocumento, nacimiento, sexo, ciudad, usuario, contraseña} = req.body;
    const usuarioEncontrado = await Usuario.find({usuario});

    if(usuarioEncontrado.length === 0){
        const nuevoUsuario = new Usuario({
            nombre,
            tipoDocumento,
            numeroDocumento,
            nacimiento,
            sexo,
            ciudad,
            usuario,
            contraseña
        });
        nuevoUsuario.save().then((usuarioCreado) => {
            res.status(200).json({usuarioCreado});
        });    
    }else{
        res.status(400).json({error:'El usuario ya existe'});
    }
}

module.exports = {
    crearUsuario
}