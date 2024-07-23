import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: [true , "please enter user name"]
    },

    email : {
        type:String,
        require: [true , "please enter email"],
        unique: [true , "email already registred"]
    },

    password:{
        type:String,
        require: [true , "please enter user password"]
    }
}, 
{
    timestamps: true
}
);

export default mongoose.model("User" , userSchema);