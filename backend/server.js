const express=require('express');
const port=5000;
const dotenv=require("dotenv").config();
//connexion a la database
const connectDB=require("./config/db.js");
connectDB();
const app=express();

// app.get("/post", (req,res)=>{
//     res.json({
//         message: "Bienvenue sur le serveur Express",
 
//     })
// });

//Middleware permet de traiter les donnee de la request




// const postRoute=require("./routes/post.routes")
app.use(express.json());
app.use(express.urlencoded({ extended:false}))
app.use("/post", require("./routes/post.routes.js"))






//lancer le serveur
app.listen(port, ()=>{
    console.log(`Le serveur à demarée au port ${port}`)
})