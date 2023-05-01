import { ConsultListGenresApi } from "../Api/consult-list-genres";

export class ConsultListGenres{
    async execute(){
        const response = await new ConsultListGenresApi().execute();
        if(response.Code === 200){
            return response
        }
        return response; 
    }
}