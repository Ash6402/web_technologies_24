import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../middleware/jwt.middleware.js";

export async function createUser(req, res){
   const hashedPassword = await bcrypt.hash(req.body.password, 10);
   try{
      // check if a user with that username already exists
      const user = await User.findOne({username: req.body.username}).exec()
      if(user){
         res.status(409).json({error: "Username already taken"});
      }else{
         const user = new User({...req.body, password: hashedPassword});
         await user.save();
         res.status(201).json({username: user.username, id: user._id});
      }

   }catch(e){
      res.sendStatus(500);
   }
}

export async function loginUser(req, res){
   try{
      const user = await User.findOne({username: req.body.username}).exec();
      // check if any user exists against that username
      if(!user){
         res.status(404).json({error: "user not found"})
      }else{
         const passMatch = await bcrypt.compare(req.body.password, user.password)
         if(passMatch){
            const payload = { name: user.username, id: user._id }
            const token = generateToken(payload);
            res.status(202).json({access_token: token})
         }else{
            res.status(401).json({error: "Incorrect Password"});
         }
      }
   }catch(e){
      res.sendStatus(500);
   }
}