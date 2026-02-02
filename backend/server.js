const express=require('express')
const app=express()
const connectDB=require('./config/db')
const router=require('./router/Routes')
const cors=require('cors')


app.use(express.json())
app.use(cors())

connectDB()
app.use('/',router)
app.get('/',(req,res)=>{
    res.status(200).json({message:"server start successfully"})
})

const PORT=5000;
app.listen(PORT,()=>{
   console.log("server running")
})