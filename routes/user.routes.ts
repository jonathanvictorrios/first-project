import { Router } from "express";
import { userRepository } from "../repositories/user.repository";

const router = Router();

router.get("/users", async (req, res) => {
    const users = await userRepository.find();
    res.send(users);
});

export default router;