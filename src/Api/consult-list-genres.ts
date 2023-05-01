import axios from "axios";

export class ConsultListGenresApi{
    async execute(){
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1075b8cb5d9067d5349a423c694f21fb`)
            return {
                Status: "Sucess",
                Code: 200,
                ListaGeneros : response.data.genres
            }
        } catch (error) {
            return{
                Status: "Error",
                Code: 400,
                Message : "Erro ao consultar lista de generos"
            }
        }
    }
}