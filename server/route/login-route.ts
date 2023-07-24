import express,  { Express, Request, Response } from 'express'
const loginRouter = express.Router();

const {login, getUsers, getSingleUser, deleteSingleUser}= require("../controller/login");

loginRouter.route('/').post(login).get(getUsers)
loginRouter.route('/:id').get(getSingleUser).delete(deleteSingleUser)

module.exports= loginRouter