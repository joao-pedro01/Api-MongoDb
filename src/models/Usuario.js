import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    tipoUsuario: {type: Number, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    ip: {type: String, required: false}
  }
);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;