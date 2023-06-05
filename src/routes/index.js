import express from "express";
import usuarios from "./usuariosRoutes.js";
import localizacoes from "./localizacoesRoutes.js";

const routes = (app) => {
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', '*');
        res.append('Access-Control-Allow-Headers', '*');
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();
    });
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"});
    });
    app.use(
        express.json(),
        usuarios,
        localizacoes
    );
};

export default routes;