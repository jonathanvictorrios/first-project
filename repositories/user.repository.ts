import { connection } from '../db/connection'
import { users } from "../entities/user.entity"

export const userRepository = connection.getRepository(users);

export const findAllUsers = async () => {
    return await userRepository.find();
}
export const findByEmail = async (email:string) => {
    return await userRepository.findOne({where: {email:email},lock: { mode: "optimistic", version: 1 }});
}

export default userRepository;

