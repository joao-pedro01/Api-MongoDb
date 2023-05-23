import express from "express";
import LocalizacaoController from "../controllers/localizacoesController.js";

const router = express.Router();

router
    .get("/localizacoes", LocalizacaoController.listarLocalizacoes)
    //.get("/usuarios/busca", LocalizacaoController.listarLivroPorNome)
//   .get("/livros/:id", LocalizacaoController.listarLivroPorId)
    .post("/localizacoes", LocalizacaoController.cadastrarLocalizacao)
    //.put("/usuarios/:id", LocalizacaoController.atualizarUsuario)
    //.delete("/usuarios/:id", LocalizacaoController.excluirUsuario)

export default router;   