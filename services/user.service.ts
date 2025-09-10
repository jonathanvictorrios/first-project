import userRepository, { findByEmail } from '../repositories/user.repository';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken')
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
    async login (email:string , password:string){
        const userExisting = await findByEmail(email)
        if(userExisting) {
            const verifyPass = await bcrypt.compare(password.toString(),userExisting.password)
            if(verifyPass){
                const payload = {
                    id: userExisting.id,
                    email: userExisting.email
                }
                const newToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
                return newToken;
            }
        }
        return null;
    }

}