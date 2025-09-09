import { userRepository} from './../repositories/user.repository';
import { Request, Response } from 'express';
import { connection } from '../db/connection'
import { users } from "../entities/user.entity"
import bcrypt from "bcrypt";
import { UserService } from '../services/user.service';
const jwt = require("jsonwebtoken");

export class UserController{
    async register (req:Request, res:Response) {
        const {name , email , password } = req.body;
        const userService = new UserService
        try {
            await userService.register(name,password,email);
            res.status(201);
            res.send("User register");
        } catch (error) {
            res.status(400).json({message:"error register user"});
        }
    }
    // async login (req:Request, res:Response){
    //     const {email , password } = req.body;
    //     if (!email || !password) {
    //         res.status(400);
    //         throw new Error("Please add all fields");
    //     }
    //     const user = await userRepository.findByEmail;
    //     if(user && (await bcrypt.compare(password, user.password))){

    //     }

    // }
    async generateJwt(id:number){
        return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:"1h"});
    }
}

