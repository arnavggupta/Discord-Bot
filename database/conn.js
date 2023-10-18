const mongoose=require("mongoose");

const connectdb=async()=>{

    try{
        mongoose.set("strictQuery",false);
    const conn= await mongoose.connect(process.env.MONGODB_CONNECT_URI);
    console.log(`Database Connected :${conn.connection.host} `);
    }
    catch(err){
        console.log("connect failed "+err.message);
    }
    
    }
    module.exports=connectdb;



