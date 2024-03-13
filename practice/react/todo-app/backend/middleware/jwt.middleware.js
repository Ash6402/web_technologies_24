import jwt from "jsonwebtoken";

export function generateToken(payload){
   const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15s'
   })
   return token;
}

export function authenticateToken(payload){
     
}