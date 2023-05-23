import express from "express";
import LivroController from "../controllers/usuariosController.js";

const router = express.Router();

router
    .get("/usuarios", LivroController.listarUsuarios)
    .get("/usuarios/busca", LivroController.listarLivroPorNome)
//   .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/usuarios", LivroController.cadastrarLivro)
    .put("/usuarios/:id", LivroController.atualizarUsuario)
    .delete("/usuarios/:id", LivroController.excluirUsuario)

export default router;   