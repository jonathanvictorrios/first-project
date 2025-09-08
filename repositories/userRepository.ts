import { connection } from '../db/connection'
import { users } from "../entities/User"

export const userRepository = connection.getRepository(users);

export const findAllUsers = async () => {
    return await userRepository.find();
}