const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    desc:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}

},{timestamps:true})
const Todo=mongoose.model('Todo',todoSchema)
module.exports=Todo