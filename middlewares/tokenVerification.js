import jwt from 'jsonwebtoken';
import User from '../models/userModal.js';
import dotenv from "dotenv";
dotenv.config();

export const auth=async(req,res,next)=>{
const authHeader=req.headers.authorization;

if(!authHeader){
    return res.status(401).json({message:"Authorization header missing"});

}
const token=authHeader.split(" ")[1];

if(!token){
    return res.status(401).json({message:"Token missing"});

}

}