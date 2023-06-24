import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup () {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    try {
      if (name && email && password) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/signup`, {
            name: name,
            email: email,
            password: password
          })
          .then(res => {
            if (res) {
              setError(res.data.message)
              setTimeout(() => {
                navigate('/')
              }, 3000)
            }
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
    <div className='signup_from container d-flex justify-content-center align-items-center'>
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

        <h1 className='display-4 text-center'>Sign up</h1>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Name
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
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
            If you have an account <Link to='/'>Login</Link>
          </p>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
