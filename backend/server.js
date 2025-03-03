const express=require('express');
const port=5000;
const connectDB=require("./config/db.js");
const dotenv=require("dotenv");
dotenv.config()
//connexion a la database
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
        connectDB();