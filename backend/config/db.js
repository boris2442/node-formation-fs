
//connexion a la base avec mongodb
const mongoose = require('mongoose');
const connectDB=async()=>{
    try {
        mongoose.set('strictQuery', false);
     mongoose.connect(process.env.MONGO_URI, ()=>{
         console.log('Connexion à MongoDB réussie')
     })
    } catch (error) {
       console.log(err);
       process.exit();
    }
}


module.exports=connectDB;