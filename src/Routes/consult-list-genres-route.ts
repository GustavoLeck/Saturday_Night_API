
import { Router, Request, Response } from 'express';

import { ConsultListGenresController } from "../Controller/consult-list-genres-controller";

const router = Router();

router.get('/genres', new ConsultListGenresController().handle)

export default router;