import { connection } from '../db/connection'
import { users } from "../entities/user.entity"

//get the instance of the repository (this is necesary for TypeOrm)
export const userRepository = connection.getRepository(users);

export const findAllUsers = async () => {
    return await userRepository.find();
}
export const findByEmail = async (email:string) => {
    return await userRepository.findOne({where: {email:email}});
}

export default userRepository;

