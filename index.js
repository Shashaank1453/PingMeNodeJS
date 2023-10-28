require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { connectToMongoDB } = require('./config/MongoDB')
const userRouter = require('./routes/userRouter')
const chatRouter = require('./routes/chatRouter')
const PORT = process.env.PORT
const app = express()

const cors = require('cors')
connectToMongoDB()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send({msg:"helloo"})
})
app.use('/',userRouter)
app.use('/',chatRouter)

app.listen(PORT, () => {
    console.log(`NodeJS Server running on https://127.0.0.1:${PORT}`);
})