import {Request, Response } from 'express';
import { ConsultListGenres } from "../Use-Case/consult-list-genres";


export class ConsultListGenresController{
    async handle(req : Request, res : Response){
        console.log("   => Rotas de consulta de generos utilizada")
        const response = await new ConsultListGenres().execute();
        res.status(response.Code).send(response);
    }
}