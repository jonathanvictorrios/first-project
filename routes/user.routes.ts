import { Router } from "express";
import { userRepository } from "../repositories/user.repository";
import { UserController } from '../controllers/user.controller';
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded()
const userController = new UserController();
router.post("/register", jsonParser , (req, res) => {
    if(!req.body || !req.body.name || !req.body.password || !req.body.email) {
        res.sendStatus(400)
    }else{
        const newUser = userController.register(req, res);
        res.send(newUser);
    }
});
router.get("/users", async (req, res) => {
    const users = await userRepository.find();
    res.send(users);
});

export default router;