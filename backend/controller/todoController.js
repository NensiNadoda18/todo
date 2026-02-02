const Todo=require('../models/Todo')

const todoAdd=async(req,res)=>{
  const {todo}=req.body
   
  if(!todo){
    return res.status(400).json({message:'Text is required..'})
  }
  try{
    const newtodo=await Todo.create({
      desc:todo,
      userId:req.user.userId
    })
    res.status(200).json(newtodo)
    console.log("new tdo",newtodo)
  }
  catch(error)
  {
      res.status(500).json({messsage:'Error Adding todo',Error:error.message})
  }
}

const todoListGet=async(req,res)=>{
 
  try{
    const todos=await Todo.find({userId:req.user.userId})
    res.status(200).json(todos)
  //  console.log(todos)
  }
  catch(err){
    return res.status(500).json({message:'error getting todo',Error:err.message})
  }

 // res.status(200).json({messsage:'todo list get successfully'})
}
const todoDelete=async(req,res)=>{
  try {
     const todoId=req.params.id
     
     const deletedToDo=await Todo.findOneAndDelete(
      {_id:todoId,userId:req.user.userId}
     )
     
     if(!deletedToDo){
      return res.status(404).json({message:"todo not found"})
     }
     res.json(deletedToDo)
  }
  catch(err)
  {
    res.status(500).json({error:"todo not deleted"})
  }
}
const todoUpdate=async(req,res)=>{

  try{
    const {todo}=req.body;
    const todoId=req.params.id

    //only logged-in user todo update
    const updatedToDo=await Todo.findOneAndUpdate(
      { _id: todoId,userId:req.user.userId},
      {desc:todo},
      { new: true }
    )

    if(!updatedToDo){
      return res.status(404).json({message:"ToDo not found or unauthorized"})
    }
    res.json(updatedToDo)
  }
  catch(err){
      res.status(500).json({error:'failed to update todo'})
  }
 
}
module.exports={todoAdd,todoDelete,todoListGet,todoUpdate}