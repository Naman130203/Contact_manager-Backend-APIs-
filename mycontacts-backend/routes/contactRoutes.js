import express from "express";
import {getContacts , createContact , UpdateContact , deleteContact , getContact} from "../Controllers/contactControllers.js";
const router = express.Router();
import validateToken from "../middleware/validateTokenHandler.js";

router.use(validateToken);

router.route("/").get(getContacts);

router.route("/:id").get(getContact);

router.route("/").post(createContact);

router.route("/:id").put(UpdateContact);

router.route("/:id").delete(deleteContact);
 
export default router;