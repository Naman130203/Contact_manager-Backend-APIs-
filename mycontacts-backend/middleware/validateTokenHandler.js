import asyncHandler from "express-async-handler"; 
import jwt, { decode } from "jsonwebtoken";
import Dotenv  from "dotenv";
const env = Dotenv.config();
const validateToken = asyncHandler(async (req , res , next) =>{
   let token 
   let authHeader = req.headers.authorization || req.headers.authorization 
   if(authHeader && authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1];
    jwt.verify(token , process.env.ACCESS_TOKEN_SECRET , (err , decode)=>{
        if(err){
            res.status(401);
            throw new Error ("User not authorized");
        }
        req.user = decode.user;
        next();
    })
     if(!token){
        res.status(401)
        throw new Error("token is not valid");
     }
   }
})

export default validateToken;