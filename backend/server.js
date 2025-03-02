const express=require('express');
const port=5000;
const app=express();

// app.get("/post", (req,res)=>{
//     res.json({
//         message: "Bienvenue sur le serveur Express",
 
//     })
// });









//lancer le serveur
app.listen(port, ()=>{
    console.log(`Le serveur à demarée au port ${port}`)
})