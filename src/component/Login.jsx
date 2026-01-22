import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const [message,setMessage]=useState('')
    const navigate=useNavigate()
    const user="nensi";
    const password="nensi123"
    const submit=async()=>
    {
       if(user!=name & password!=pass)
            setMessage("username and password  is wrong")
       else
            navigate("/")
    }


  return (
    <div>
      <form>
        <input type='text' placeholder='Username' id='user' onChange={(e)=>setName(e.target.value)}/><br/>
        <input type='text' placeholder='password' id='pass' onChange={(e)=>setPass(e.target.value)}/><br/>
        <button onClick={submit}>Login</button> 
        <p>{message}</p>
      </form>
    </div>
  )
}

export default Login
