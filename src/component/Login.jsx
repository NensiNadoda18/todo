import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm,Controller } from 'react-hook-form'
import './Login.css'


const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const submit = (data) => {
    setMessage("")

    if (data.username !== "nensi" || data.password !== "nensi123") {
      setMessage("Username or password is wrong")
      return
    }

    navigate("/addbook")
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
            <input {...field} placeholder="Enter email" />
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
