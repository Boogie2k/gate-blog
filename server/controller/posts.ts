import  { Request, Response } from 'express'

const Posts = require("../model/model")

const getPosts = async (req: Request, res: Response) => {

  try {
    const item= await Posts.find({})
  res.status(200).json(item)
  } catch (error) {
    res.status(500).json(error)
  }
  
  } 


const createPost =  async (req: Request, res: Response) => {try{
  const item = await Posts.create(req.body)
  
  res.status(200).json(item)
}
catch(error){
res.status(500).json(error)
}
}



const getSinglePost = async(req: Request, res: Response) => {
try{  
  const{id:itemID} = req.params
 
  const item= await Posts.findOne({_id:itemID})

  if(!item){
    res.status(200).json("file not found")
    return
  }

  res.status(200).json(item)
} catch(error){
res.status(500).json(error)
}
}



const deletePost = async (req: Request, res: Response) => {
try{ 
  const {id:itemID}= req.params

  const item = await Posts.findOne({_id:itemID})

  if(!item){
    res.status(404).json('item not found')
    return
  }

const deletedItem=  await Posts.findOneAndDelete({_id:itemID})
res.status(200).json(deletedItem)
}catch(error){
res.status(500).json(error)
}
} 


const updatePost = async (req: Request, res: Response) => {
try{  
  const {id:itemID} = req.params
  const item = await Posts.findOne({_id:itemID})
  if(!item){
    res.status(404).json('item not found')
  }
   const updatedItem = await Posts.findOneAndUpdate({_id:itemID}, req.body,{new: true})

   res.status(200).json(updatedItem)
} catch(error){
res.status(500).json(error)
}
}


module.exports={getPosts, createPost, getSinglePost, deletePost, updatePost}