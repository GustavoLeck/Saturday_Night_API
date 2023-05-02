import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

//Import de rotas

import Status from "./Routes/status-route";
import Movies from "./Routes/consult-movie-route";
import Generos from "./Routes/consult-list-genres-route";



const app = express();
const port = 3080;

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Rotas
app.use("/api", Status);
app.use("/api", Movies);
app.use("/api", Generos);

// Inicialização do servidor
app.listen(port, () => {
  console.clear();
  console.log(`--Server ON--`);
});
