import  { Request, Response, raw } from 'express'
const jwt = require('jsonwebtoken')
const Login = require("../model/login-model")

const login= async (req:Request, res:Response)=>{

    try {
         let {email, password} = req.body
 const User = await Login.findOne({email})
 if(!User || User.password !== password ){
    res.json('invalid credentials')
    return;


 }
 const token = jwt.sign({
    userId:User._id,  userEmail:User.email
}, 'boogieSecret')
res.status(200).json({userId:User.id, userEmail:User.email,token: token})
    } catch (error) {
        res.status(500).json(error)
    }
   
}

const getUsers= async(req:Request, res:Response)=>{
try {
    const users = await Login.find({})
    res.json(users)
} catch (error) {
    res.status(404).json(error)
}
}

const getSingleUser= async (req:Request, res:Response)=>{
    try {
        const {email}= req.body
        const user = await Login.findOne({email})
        if(!user){
            res.json('user not found')
            return;
        }
        res.status(200).json(user)
    } catch (error) {
        
    }
 
}

const deleteSingleUser = async(req:Request, res:Response)=>{
try {
    const {email} = req.body
    const user= await Login.findOneAndDelete({email})
    
  if(!user){
            res.json('user removed')
            return;
        }
res.json( JSON.parse(user))

} catch (error) {
    res.json({
        success:false,
        msg:error
    })
}
}

module.exports= {login, getUsers, getSingleUser, deleteSingleUser}