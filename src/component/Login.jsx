import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'


const Login = () => {
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const [message,setMessage]=useState('')
    const navigate=useNavigate()
    const user="nensi";
    const password="nensi123"
    console.log("name",name)
    console.log("paas",pass)
    const submit=async(e)=>
    {
       e.preventDefault()
       if (!name || !pass)
            setMessage("Please fill the field")
       if(user!=name && password!=pass)
            setMessage("username and password  is wrong")
       else
            navigate("/addbook")
    }


  return (
    <div  className='login'>

      <form onSubmit={submit} className='box' >
       
         <h2 > Login</h2>
       
        <input type='text' placeholder='Username' id='user'  onChange={(e)=>setName(e.target.value)}/><br/>
       
        <input type='password' placeholder='password' id='pass'  onChange={(e)=>setPass(e.target.value)}/><br/>
       
        <button>Login</button> 
       
        <p>{message}</p>
      </form>
 </div>
  )
}

export default Login
