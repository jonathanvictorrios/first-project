import { connection } from "../db/connection";

export const productRepository = connection.getRepository('products');

export const getAllProducts = async ()=>{
    return await productRepository.find();
}

export const getProductById = async(id:number)=>{
    return await productRepository.findOneBy({
        id:id
    })
}
export const getProductByPrice = async(price:number)=>{
    return await productRepository.findBy({
        price:price
    })
}
