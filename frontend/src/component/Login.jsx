import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm,Controller } from 'react-hook-form'
import axios from 'axios'
import './Login.css'


const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues:{
      username:"",
      password:""
    }
  })

  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const submit = async(data,e) => {
    console.log("ddata:",data)
    e.preventDefault()
    try{
       setMessage("")

      const res=await axios.post('http://localhost:5000/login',data)

      localStorage.setItem('token',res.data.token)
        navigate("/addbook")
    }
    catch(error)
    {
      setMessage(error.message)
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit(submit)} className="box">
        <h2>Login</h2>

        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input {...field} placeholder="Enter Username
            " />
          )}
        />
        {errors.username && (
          <p className="error">Username is required</p>
        )}

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              placeholder="Enter password"
            />
          )}
        />
        {errors.password && (
          <p className="error">Password is required</p>
        )}

        <button type="submit">Login</button>

        {message && <p className="error">{message}</p>}
      </form>
    </div>
  )
}


export default Login
