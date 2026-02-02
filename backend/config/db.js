const mongoose=require('mongoose')
const config=require('./config')

const connectDB=async()=>{
    try{
      await mongoose.connect(config.mongo_uri)
      console.log("Database connected successfully...")
    }catch(error)
    {
        console.log("database connection error:",error)
    }
}
module.exports=connectDB