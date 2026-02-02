const express=require('express')
const loginUser = require('../controller/authController')
const {todoAdd,todoDelete,todoListGet, todoUpdate}=require('../controller/todoController')
const router=express.Router()
const authmiddleware=require('../middleware/authmiddleware')

router.post('/login',loginUser)
router.post('/add',authmiddleware,todoAdd)
router.delete('/delete/:id',authmiddleware,todoDelete)
router.put('/update/:id',authmiddleware,todoUpdate)
router.get('/get',authmiddleware,todoListGet)


module.exports=router