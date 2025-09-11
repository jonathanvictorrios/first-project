import { movilidad } from "../entities/movilidad.entity";
import { users } from "../entities/user.entity";
import { DataSource } from "typeorm";
export const connection = new DataSource({
  type: "postgres" ,
  host: process.env.HOST,
  port: 55324,
  username: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  entities: [users,movilidad],
  synchronize: false,
  logging: false
});