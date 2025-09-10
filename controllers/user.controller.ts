import { findByEmail, userRepository} from './../repositories/user.repository';
import { Request, Response } from 'express';
import { connection } from '../db/connection'
import { users } from "../entities/user.entity"
import bcrypt from "bcrypt";
import { UserService } from '../services/user.service';
import { error } from 'console';
const jwt = require("jsonwebtoken");

export class UserController{
    async register (req:Request, res:Response) {
        const {name , email , password } = req.body;
        const userService = new UserService
        const existingEmail =await findByEmail(email)
        if(existingEmail){
            res.status(200).json({message:"Email already exists"})
            return
        }
        try {
            const newUser = await userService.register(name,password,email);
            res.status(200).json({message:"User Registered" , user:{name:newUser.name , email:newUser.email}})
        } catch (error:any) {
            res.send(error)            
        }
    }
    async login (req:Request, res:Response){
        const {email,password} = req.body
        const userService = new UserService
        const token = await userService.login(email,password)
        if(token){
            res.status(200).json({token:token})
            return
        }
        throw new Error("data incorrect!");
    }
    async generateJwt(id:number){
        return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:"1h"});
    }
}

