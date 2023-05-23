import mongoose from "mongoose";

const localizacaoSchema = new mongoose.Schema(
  {
    id: {type: String},
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    cep: {type: String, required: true}
  }
);

const localizacoes = mongoose.model('localizacoes', localizacaoSchema);

export default localizacoes;