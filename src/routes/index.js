import express from "express";
import usuarios from "./usuariosRoutes.js";
import localizacoes from "./localizacoesRoutes.js";

const routes = (app) => {
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