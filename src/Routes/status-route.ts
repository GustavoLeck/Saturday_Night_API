import express from "express"
import {Request, Response } from 'express';
const router = express.Router();

router.get(`/status`, (req : Request, res : Response)=>{
    console.log("   => Rotas de consulta status utilizada.")
    res.send({status: "Ok"})
})

export default router;