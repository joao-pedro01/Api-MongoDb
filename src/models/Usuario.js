import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    tipoUsuario: {type: Number, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true}
  }
);

const usuarios = mongoose.model('usuarios', usuariosSchema);

export default usuarios;