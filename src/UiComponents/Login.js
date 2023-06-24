import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

function Login () {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    try {
      if (email && password) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/signin`, {
            email: email,
            password: password
          })
          .then(res => {
            setError(`User Login successfully ${res.data.user.name}`)
            localStorage.setItem('TOKEN', res.data.token)
            localStorage.setItem('NAME', res.data.user.name)
            localStorage.setItem('EMAIL', res.data.user.email)
            localStorage.setItem('ROLE', res.data.user.role)
            setTimeout(() => {
              navigate('/content')
            }, 3000)
          })
          .catch(err => {
            setError(err.response.data.message)
          })
      } else {
        setError('Invalid input')
      }
    } catch (err) {
      setError(' Input Error')
      console.log('Error...', err)
    }
  }
  return (
    <div className='login_from container d-flex justify-content-center align-items-center'>
      <form
        className='col-lg-6 col-md-12 col-sm-12 col-xs-12'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        {error && (
          <div
            className={`alert ${
              error == 'Invalid input' || error == 'Input Error'
                ? 'alert-danger'
                : 'alert-success'
            }`}
            role='alert'
          >
            {error}
          </div>
        )}
        <h1 className='display-4 text-center'>Login</h1>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div>
          <p className='text-center'>
            Don't Have an account <Link to='/signup'>Signup</Link>
          </p>
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
