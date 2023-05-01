import axios from "axios";
import { Filtro } from "../Interface/filtro-movie-interface";

export class ConsultMovieApi{
    async execute( value: Filtro) {
        try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1075b8cb5d9067d5349a423c694f21fb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=${value.Ano}&with_genres=${value.Generos}`);
        return {
            Status: "Sucess",
            Code: 200,
            TotalFilmes: response.data.results.length,
            Filmes: response.data.results
        };
        } catch (error) {
            return {
                Status: "Erro",
                Code: 400,
                Message: "Erro ao consultar filme"};
        }
    }
}