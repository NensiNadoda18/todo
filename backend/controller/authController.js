const User=require('../models/User')
const config=require('../config/config')
const jwt=require('jsonwebtoken')

const loginUser=async(req,res)=>{
    try{
        const {username,password}=req.body
        if(!username || !password)
            return res.status(400).json({message:"Please fill all field"})
        
        const user=await User.findOne({name:username}) 
        if(!user)
            return res.status(400).josn({message:"User not available"}) 
        if(password!=user.password)
            return res.status(401).json({message:"Invalid Password"})
        const token=jwt.sign(
            {userId:user._id,username:user.name},
            config.jwt_secret,
            {expiresIn:'1h'}
        )
        return res.status(200).json({message:"Login successfully",token:token,user:{userId:user._id,name:user.name}})


    }catch(error)
    {
        res.status(500).json({message:"Server Error"})
        console.log("Server Error",error.message)
    }
}
module.exports=loginUser
