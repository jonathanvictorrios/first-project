import { userRepository } from './../repositories/user.repository';
import { connection } from '../db/connection'
import { users } from "../entities/user.entity"
import bcrypt from "bcrypt";

export class UserController{
    async register (name:string,password:string,email:string):Promise<any> {
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = userRepository.create({
            name:name,
            email:email,
            password:password
        })
        const savedUser = await userRepository.save(newUser)
        console.log("Usuario registrado correctamente",savedUser);
    }
}

