const User=require('../models/User')
 
const user=async(req,res)=>{
    const name="nensi"
    const password="nensi123"
   try{
     
    await User.insertOne({"name":name,"password":password})
    User.commit()
   }
   catch(error)
   {
    console.log("error:",error)
   }
}
