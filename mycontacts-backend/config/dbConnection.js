import mongoose from "mongoose";
import dotenv from "dotenv";
const env = dotenv.config();
const connectDB = async ()=>{
    try{
      const connect = await mongoose.connect(process.env.CONNECTION_STRING);
      console.log("connection established:" , connect.connection.host , connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;