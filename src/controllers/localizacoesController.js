import localizacoes from "../models/Localizacao.js";

class LocalizacaoController {
    static listarLocalizacoes = async(req, res) => {
        localizacoes.find().exec().then((localizacoes) => {
            res.status(200).send(localizacoes);
        }).catch((err) => {
            console.log(err)
            res.status(200).send({message: err});
        });
    }

    static cadastrarLocalizacao = async(req, res) => {
        let localizacao = new localizacoes(req.body);

        localizacao.save().then(()  => {
            res.status(201).send(localizacao.toJSON());
        }).catch((err) => {
            console.error(err);
            res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`})
        })
    }
}

export default LocalizacaoController;