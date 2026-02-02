const jwt=require('jsonwebtoken')
const config=require('../config/config')

const jwt_secret=config.jwt_secret

const authmiddleware=(req,res,next)=>{
  //if token is exist in header 
  const authHeader=req.headers.authorization

  if(!authHeader||!authHeader.startsWith('Bearer ')){
    return res.status(401).json({message:`Unauthorized:No token provided`})
  }

  const token= authHeader.split(' ')[1]

  try{
    //token verify
    const decoded=jwt.verify(token,jwt_secret)

    //user info ko req object me add karo 
    req.user=decoded//contain user Id and email
    next();//move to next route/controller

  }
  catch(error){
    return res.status(401).json({message:'Unauthorized:Invalid token'})
  }
}
module.exports=authmiddleware