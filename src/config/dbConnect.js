import * as dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

//var url = "mongodb://localhost:27017/projeto-final";
mongoose.connect(`mongodb+srv://joaopedro01:${process.env.DB_KEY}@projeto-final.7bftmbm.mongodb.net/?retryWrites=true&w=majority`);
//mongoose.connect(`mongodb://localhost:27017/projeto-final`);
//mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

export default db;