import express from "express";
import { connection } from "./db/connection";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(cors());
app.use(express.json());

connection.initialize()
.then(() => {
    console.log("Database connected");
    app.use("/api", userRoutes);

})
.catch(error => {
    console.log(error);
});
