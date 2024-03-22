import jwt from "jsonwebtoken";

export function generateAccessToken(payload){
   const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15s'
   })
   return token;
}

export function generateRefreshToken(payload){
   const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
   return token;
}

export function authenticateToken(req, res, next){
   jwt.verify(req.cookies.access_token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if(err){
         res.sendStatus(403)
         return
      }
      req.body.id = user.id;
      next()
   })
}