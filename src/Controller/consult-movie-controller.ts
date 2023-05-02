import {Request, Response } from 'express';
import { ConsultMovieModel } from "../Model/consult-movie-model";
import { ConsultMovie } from "../Use-Case/consult-movie";

export class ConsultMovieController{
    async handle(req : Request, res : Response){
        console.log("   => Rotas de consulta de filmes utilizada.")
        const filtro = new ConsultMovieModel(parseInt(req.params.ano), req.params.generos.split(','))
        const respostaPesquisaMovie = await new ConsultMovie().execute(filtro);
        res.status(200).send(respostaPesquisaMovie);
    }
}