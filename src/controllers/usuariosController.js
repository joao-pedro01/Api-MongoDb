import usuarios from "../models/Usuario.js";

class UsuarioController {
    static listarUsuarios = async(req, res) => {
        usuarios.find().exec().then((user) => {
            res.status(200).send(user);
        }).catch((err) => {
            console.log(err)
            res.status(200).send({message: err});
        });
    }

    static listarUsuarioPorId = (req, res) => {
        const id = req.params.id;
        
        usuarios.findById(id)
        .populate('nome', 'email')
        .exec((err, Usuario) => {
        if(err) {
            console.log()
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
        } else {
            res.status(200).send(Usuario);
        }
        })
    }

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body);
        console.log(usuario)
        
        usuario.save().then(()  => {
            res.status(201).send(usuario.toJSON());
        }).catch((err) => {
            console.error(err);
            res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`})
        })
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;
        console.log(req.body)
        usuarios.findByIdAndUpdate(id, {$set: req.body}).then((usuario) => {
            res.status(200).send({message: 'Usuário atualizado com sucesso'})
        }).catch((err) => {
            res.status(500).send({message: err.message})
        })
    }

    static excluirUsuario = (req, res) => {
        const id = req.params.id;
        console.log(id)
        usuarios.findByIdAndDelete(id).then(() => {
            res.status(200).send({message: 'Usuário removido com sucesso'})
        }).catch((err) => {
            res.status(500).send({message: err.message})
        });
    }

    static listarUsarioPorCadastro = (req, res) => {
        let usuario = req.body;
        console.log(usuario)

        usuarios.find(usuario, {}).then((usuarios) => {
            res.status(200).send(usuarios);
        }).catch((err) => {
            res.status(500).send({message: err.message})
        })
    }
}

export default UsuarioController;