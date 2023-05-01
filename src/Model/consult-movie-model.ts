export class ConsultMovieModel{

    public Ano : Number;
    public Generos : String[];

    constructor(ano: Number, generos: String[]){
        this.Ano = ano;
        this.Generos = generos;
    }   
}