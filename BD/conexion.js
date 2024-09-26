const mongoose = require("mongoose");


const conexion = async()=>{

    try{

        
       await mongoose.connect("mongodb+srv://lautarorcloudy:atsQkDjIBYcO3Dd3@cluster0.cze67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    //    mongodb+srv://lautarorcloudy:<db_password>@cluster0.cze67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    // "mongodb+srv://lautarorcloudy:uzAcogGptdDAlsMF@cluster0.7nxdyle.mongodb.net/Cluster0
       console.log("conectado correctamente");

    }catch(error){
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos");
    }
}

module.exports={
    conexion
}

