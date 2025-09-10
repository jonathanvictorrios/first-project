import userRepository from "../repositories/user.repository";
import bcrypt from 'bcrypt';

export class UserService{
    async register (name:string,password:string,email:string):Promise<any> {
            const hashPassword = await bcrypt.hash(password.toString(),10)
            const newUser = userRepository.create({
                name:name,
                email:email,
                password:hashPassword
            })
            await userRepository.save(newUser)
            return newUser
        }

}