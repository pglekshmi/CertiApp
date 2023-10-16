const express= require('express') ;
var router = express.Router();

router.post('/issue',(req,res)=>{
    const data = req.body;
    console.log(data.name);
})

router.get('/view',(req,res)=> {
    console.log("Hi");
    res.send("Hi");
})
module.exports = router;