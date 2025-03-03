//connexion a la base avec mongodb
const mongoose = require("mongoose");
const connectDB = async () => {
 
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connexion à MongoDB réussie");
    }).catch ((error)=> {
    console.log(error);
    // process.exit();
  })
};

module.exports = connectDB;
