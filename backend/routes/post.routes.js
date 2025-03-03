const express=require('express');
const router=express.Router();


router.get('/', (req,res)=>{
    res.json({
        message: "Bienvenue sur le serveur Express",
        titre:"voici les données et de la data"
 
    })
})

router.post('/', (req,res)=>{
    res.json({message:req.body.message});
});

router.put('/:id', (req, res)=>{
    res.json({mesageId:req.params.id});
});

router.delete('/:id', (req, res)=>{
    res.json({mesageId:"post supprime sur id numero"+req.params.id});
})


//les likes
router.patch("/like-post/:id", (req, res)=>{
    res.json({message:"post liké"+req.params.id});
})
router.patch("/dislike-post/:id", (req, res)=>{
    res.json({message:"post disliké"+req.params.id});
})





module.exports=router; 