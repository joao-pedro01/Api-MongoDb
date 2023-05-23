import * as dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

mongoose.connect(`mongodb+srv://joaopedro01:${process.env.DB_KEY}@projeto-final.7bftmbm.mongodb.net/?retryWrites=true&w=majority`);

let db = mongoose.connection;

export default db;