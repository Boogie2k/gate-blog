import express,  { Express, Request, Response } from 'express'
const cors = require("cors");
const posts = require("./route/post-route");
const Login = require("./route/login-route")
const Register = require('./route/register-route')

const app = express()
const connect = require("./db/connect")
require("dotenv").config();

app.use(express.json()) 
app.use(cors())

const port = 4000

app.get('/', (req:Request ,res:Response) => {
res.send('Hello World!')
})

app.get("/api/blog",)

app.use("/api/blog", posts)
app.use("/api/users/login", Login)
app.use("/api/users/register", Register)






 const start = async ()=>{
  try {
    await connect(process.env.MONGO_URI);

    app.listen(port, ()=>{console.log('server is running on http://localhost:'+port+'/')})
  } catch (error) {
    
  }
 }

start()