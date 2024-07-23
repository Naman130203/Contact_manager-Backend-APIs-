import e from "express";
import { currentUser, loginUser, registerUser } from "../Controllers/userController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const userRouter = e.Router();


userRouter.post("/register" , registerUser);

userRouter.post("/login" , loginUser);

userRouter.get("/currentUser" ,validateToken, currentUser);


export default userRouter;