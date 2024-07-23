import express from "express";
import dotenv from "dotenv";
import router from "./routes/contactRoutes.js";
import bodyParser from "body-parser";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/dbConnection.js";
import userRouter from "./routes/userRoutes.js";
connectDB();

const app = express();
const env = dotenv.config();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : true})); // middleware for  accepting data from body
app.use(bodyParser.json());               //for accepting json type body
app.use("/api/contacts" , router );     // middleware for getting routes 
app.use("/api/users" , userRouter );
app.use(errorHandler); // middleware for handling error


app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})