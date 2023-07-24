import  { Request, Response,} from 'express'
const jwt = require('jsonwebtoken')
const User= require("../model/login-model")

const register= async (req:Request, res:Response)=>{
      
    try {
         let {email, username, password} = req.body

  const newUser = User({
    username,
    email,
    password,
  });
 
const oldUser = await  User.findOne({email})
if(oldUser){
res.status(401).json("email is already in use")
return
}
 await newUser.save()

 

 

 const token = jwt.sign({
    userId:newUser._id,  userEmail:newUser.email
}, 'boogieSecret')


res.status(200).json({userId:newUser.id, userEmail:newUser.email,token: token})
    } catch (error) {
        res.status(500).json(error)
    }
   
}

module.exports= register

