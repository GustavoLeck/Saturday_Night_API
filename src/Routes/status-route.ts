import express from "express"

const router = express.Router();

router.get(`/status`, (req, res)=>{
    console.log("Teste")
    res.send({status: "Ok"})
})

export default router;