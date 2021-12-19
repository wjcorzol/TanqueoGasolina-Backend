const Usuario = require('./model')

// const list = async (req, res) => {
//     const usuarios = await Usuario.find();
//     res.status(200).json({usuarios})
// }

const list = async (req, res) => {
    const authors = await Usuario.find();
    res.status(200).json({ authors })
}


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
    crearUsuario,
    list
}