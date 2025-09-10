import { Router } from "express";
import { userRepository } from "../repositories/user.repository";
import { UserController } from '../controllers/user.controller';
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded()
const userController = new UserController();
router.post("/register" , (req, res) => {
    //basic validation verifying if each field exist
    if(!req.body || !req.body.name || !req.body.password || !req.body.email) {
        res.sendStatus(400)
    }else{
        userController.register(req, res);
    }
});
router.get("/users", async (req, res) => {
    const users = await userRepository.find();
    res.send(users);
});

export default router;