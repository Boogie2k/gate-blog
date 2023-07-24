import express,  { Express, Request, Response } from 'express'
const router = express.Router();

const {getPosts, createPost, getSinglePost, deletePost, updatePost}= require("../controller/posts");

router.route('/').get(getPosts).post(createPost)
router.route('/:id').get(getSinglePost).put(updatePost).delete(deletePost)
module.exports= router