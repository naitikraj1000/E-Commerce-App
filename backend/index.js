const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

// 
const app = express()
app.use(cors({
    origin : ['https://ecommercefrontend-git-main-naitikraj1000s-projects.vercel.app',process.env.FRONTEND_URL],
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnected to DB")
        console.log(`Server is running on port ${PORT}`)
    })
})
