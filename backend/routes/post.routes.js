const express=require('express');
const router=express.Router();


router.get("/post", (req,res)=>{
    res.json({
        message: "Bienvenue sur le serveur Express",
 
    })
});





module.export=router;