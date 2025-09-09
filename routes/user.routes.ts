import { Router } from "express";
import { userRepository } from "../repositories/user.repository";
import { UserController } from '../controllers/user.controller';
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded()

router.post("/register", jsonParser , (req, res) => {
    // max jona
    if(!req.body || !req.body.name) {
        res.sendStatus(400)
    }else{
    }
});
router.get("/users", async (req, res) => {
    const users = await userRepository.find();
    res.send(users);
});

export default router;