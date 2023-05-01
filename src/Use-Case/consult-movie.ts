import { Filtro } from "../Interface/filtro-movie-interface";
import { ConsultMovieApi } from "../Api/consult-movie-api";
export class ConsultMovie{
    async execute(filtro: Filtro){

        const response = await new ConsultMovieApi().execute(filtro);
        if(response.Code === 200){
            return response
        }
        return response; 
    }
}