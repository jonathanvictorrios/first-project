import { users } from "../entities/user.entity";
import { DataSource } from "typeorm";
export const connection = new DataSource({
  type: "mysql" ,
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "first_project",
  entities: [users],
  synchronize: true,
  logging: false
});