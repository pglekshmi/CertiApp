import { Router } from 'express';
import CertiDetails from './Models/CertiDetails.js';
var router = Router();

router.post('/issue',async (req,res)=>{
    try{
    const data = req.body;
    console.log(data);
    const result = await CertiDetails.create(data);
    res.status(201).json(result)
    }catch(error){
        console.log(error);
        res.status(500).json();
    }
})

router.get('/view',async (req,res)=> {
    const id = req.query.id;
    console.log(id);
    const details = await CertiDetails.findOne({CertID: id});
    res.json(details);
})
export default router;