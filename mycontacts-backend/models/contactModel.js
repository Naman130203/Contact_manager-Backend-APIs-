import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({

    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref : "User"
    },
    name: {
        type: String,
        require: [true , "please add contact name"]
    },
    email: {
        type: String,
        require: [true , "please add contact email address"]
    },
    phone : {
        type: String,
        require: [true , "please add contact phone number"]
    }
    
} , 
{
    timestamps: true
}) 

export default mongoose.model("Contact",contactSchema);