import express from "express";
import { connection } from "./db/connection";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";
import dotenv from 'dotenv';const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const server = app.listen(55324,()=>{
    console.log('listening in port 3000');
})
connection.initialize()
.then(() => {
    console.log("Database connected");
    app.use("/api", userRoutes);
    app.use("/api", productRoutes);

})
.catch(error => {
    console.log(error);
});
