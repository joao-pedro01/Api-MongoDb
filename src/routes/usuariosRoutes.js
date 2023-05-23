import express from "express";
import UsuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router
    .get("/usuarios", UsuarioController.listarUsuarios)
    .get("/usuarios/busca", UsuarioController.listarLivroPorNome)
//   .get("/livros/:id", UsuarioController.listarLivroPorId)
    .post("/usuarios", UsuarioController.cadastrarLivro)
    .put("/usuarios/:id", UsuarioController.atualizarUsuario)
    .delete("/usuarios/:id", UsuarioController.excluirUsuario)

export default router;   