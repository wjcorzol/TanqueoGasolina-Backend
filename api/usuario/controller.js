const Usuario = require('./model')

// const list = async (req, res) => {
//     const usuarios = await Usuario.find();
//     res.status(200).json({usuarios})
// }

const list = async (req, res) => {
    const usuarios = await Usuario.find();
    res.status(200).json({ usuarios })
}


const crearUsuario = async (req, res) => {
    const { nombre, tipoDocumento, numeroDocumento, nacimiento, sexo, ciudad, usuario, contraseña } = req.body;
    const usuarioEncontrado = await Usuario.find({ usuario });

    if (usuarioEncontrado.length === 0) {
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
            res.status(200).json({ usuarioCreado });
        });
    } else {
        res.status(400).json({ error: 'El usuario ya existe' });
    }
}


const login = async (req, res) => {
    const { usuario, contraseña } = req.body;

    const foundUser = await Usuario.findOne({ usuario });
    if (foundUser) {
        // eslint-disable-next-line no-underscore-dangle
        
        // const result = await bcrypt.compare(password, foundUser.password);
        
        if ( foundUser.contraseña === contraseña) {
            res
                .status(200)
                .json({
                    data: {
                        usuario: foundUser.usuario,
                        nombre: foundUser.nombre,
                    },
                    message: "ok",
                });
        } else {
            res.json({ message: "Error: Contraseña o Usuario Incorrecto" });
        }
    } else {
        res.json({ message: "Error: Usuario no existe" });
    }
};
module.exports = {
    crearUsuario,
    list,
    login
}