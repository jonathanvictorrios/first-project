import { getProductById, productRepository } from "../repositories/product.repository"
import { Router } from "express";

const router = Router();
router.get('/products',(req,res)=>{
    const products = getProductById(1)
    res.send(products)
})

export default router;