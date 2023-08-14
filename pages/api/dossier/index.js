import { response } from "express"
const mongoose = require('mongoose');
const User= require('../../../app/models/dataSchema')
import bcrypt from 'bcryptjs'
import {useRouter} from 'next/router'
import jwt from  'jsonwebtoken'

export default async function  handler(req , res) {
  // Get data submitted in request's body.
const body = req.body
console.log(body);
const {email,password} = req.body
const db = 'mongodb://localhost:27017/lina'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)
  
    if (!body.email || !body.password){
      return res.status(422).json({error:"please ass all the fields"})
    }
    const  user = await User.findOne({email})
    if(!user){
      return  res.status(404).json({error:"user dont exists with that email "})
    }else{
    const  doMatch =  await bcrypt.compare(password,user.password)
    if(doMatch){
     
        return res.json({ token: jwt.sign({ email: user.email, password: user.password, _id: user._id }, 'RESTFULAPIs')});
          
     }else{ 
    return res.status(401).json({error:"email or password dont match"})

     }
    
      }
      return res.status(201).json({message:"signup success"})
      
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if   (!body.first || !body.last) {
    // Sends a HTTP bad request error code
      return  res.status(400).json({ data: 'First or  last name  not found' })
  }
 
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.last}` })


}