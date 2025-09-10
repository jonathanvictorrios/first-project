import { Router } from "express";
import { userRepository } from "../repositories/user.repository";
import { UserController } from '../controllers/user.controller';
import bodyParser from "body-parser";
import { authMiddleware } from "../middlewares/auth.middleware";
import express from 'express';

const router = Router();

const userController = new UserController();
router.post("/login" , (req, res) =>{
    userController.login(req, res)
});
router.get("/privateroute", authMiddleware, (req, res) =>{
    console.log("Ruta protegida ejecutada");
    res.status(200).json({message:"Welcome to protected route"})
});
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