
import { Router, Request, Response } from 'express';

import { ConsultMovieController } from "../Controller/consult-movie-controller";

const router = Router();

router.get('/movie/:ano/:generos', new ConsultMovieController().handle)

export default router;