import express,  { Express, Request, Response } from 'express'
const registerRouter = express.Router();

const register= require("../controller/register");

registerRouter.route('/').post(register)

module.exports= registerRouter