import User from '../../../app/models/dataSchema'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

export  default async function handler(req ,  res) {
   
   const  body = req.body
   console.log(body);
   const db = 'mongodb://localhost:27017/lina'
   mongoose
       .connect(db, { 
           useNewUrlParser: true,
         })
       .then(() => console.log('MongoDB connected...'))
       .catch(err => console.log(err));
      const {name,email,password} =  req.body
    try{
        if(!name || !email || !password){
          return  res.status(422).json({error:"please ass all the fields"})
        }
      const user = await User.findOne({email})
      if  (user){
return        res.status(404).json({error:"user  exists with that email "})

      } 
      const hashedPassword = await bcrypt.hash(password,12)
      await new User({
        name,
        email,
        password:hashedPassword
    }).save()

      res.status(201).json({message:"signup success"})
    } catch(err){
         console.log(err)
     }
}