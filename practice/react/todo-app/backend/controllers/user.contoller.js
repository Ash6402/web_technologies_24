import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../middleware/jwt.middleware.js";

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
            const accessToken = generateAccessToken(payload);
            const refreshToken = generateRefreshToken(payload);
            await saveRefreshToken(user._id, refreshToken);
            res.cookie('access_token', accessToken, {
               httpOnly: true,
            })
            .status(202).json({id: user._id})
         }else{
            res.status(401).json({error: "Incorrect Password"});
         }
      }
   }catch(e){
      res.sendStatus(500)
   }
}

export async function saveRefreshToken(userId, refreshToken){
   await User.updateOne({_id: userId}, {refreshToken}).exec();
}

export async function refreshToken(req, res){
   const user = await User.findOne({_id: req.body.id}).exec();
   if(user.refreshToken){
      const token = generateAccessToken({name: user.username, id: user._id})
      res.cookie("access_token", token, {
         httpOnly: true,
      }).sendStatus(200)
   }else{
      res.sendStatus(401)
   }
}