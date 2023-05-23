import usuarios from "../models/Usuario.js";

class LivroController {
    static listarUsuarios = async(req, res) => {
        usuarios.find().exec().then((user) => {
            res.status(200).send(user);
        }).catch((err) => {
            console.log(err)
            res.status(200).send({message: err});
        });
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
        if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
        } else {
            res.status(200).send(livros);
        }
        })
    }

    static cadastrarLivro = (req, res) => {
        let usuario = new usuarios(req.body);

        usuario.save().then(()  => {
            res.status(201).send(usuario.toJSON());
        }).catch((err) => {
            console.error(err);
            res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`})
        })
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;

        usuarios.findByIdAndUpdate(id, {$set: req.body}).then((usuario) => {
            res.status(200).send({message: 'Livro atualizado com sucesso'})
        }).catch((err) => {
            res.status(500).send({message: err.message})
        })
    }

    static excluirUsuario = (req, res) => {
        const id = req.params.id;
        
        usuarios.findByIdAndDelete(id).then(() => {
            res.status(200).send({message: 'Livro removido com sucesso'})
        }).catch((err) => {
            res.status(500).send({message: err.message})
        });
    }

    static listarLivroPorNome = (req, res) => {
        const nome = req.query.nome

        usuarios.find({'nome': nome}, {}).then((usuarios) => {
            res.status(200).send(usuarios);
        }).catch((err) => {
            res.status(500).send({message: err.message})
        })
    }
}

export default LivroController