import { NextFunction, Request, Response } from 'express';
const jwt = require('jsonwebtoken')
export const authMiddleware = async (req:Request , res:Response , next:NextFunction) =>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        try {
            const validToken = jwt.verify(token , process.env.JWT_SECRET);
            req.user = validToken;
            next();
        } catch (error) {
            return res.status(401).json({message: 'Invalid token'}); 
        }
    }else{
        return res.status(401).json({ message: 'No token provided' });
    }
}