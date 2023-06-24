import React, { useState, useEffect } from 'react'
import logo from '../Images/download.jpeg'
import './Navbar.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function NavBar () {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (!token) {
      navigate('/')
    }
  }, [navigate])

  const handleLogout = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/signout`)
        .then(res => {
          localStorage.removeItem('TOKEN')
          localStorage.removeItem('ROLE')
          localStorage.removeItem('NAME')
          localStorage.removeItem('EMAIL')
          setError(res.data.message)
          setTimeout(() => {
            navigate('/')
          }, 1000)
        })
        .catch(err => {
          setError(err.response.data.message)
        })
    } catch (err) {
      setError(' Input Error')
      console.log('Error...', err)
    }
  }
  return (
    <div className='navbar_container fw-bold'>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link to='/content' className='navbar-brand' href='#'>
            <img src={logo} style={{ width: '200px' }} />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse '
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav ms-auto me-auto  mb-2 mb-lg-0'>
              <li className='nav-item pe-4'>
                <a className='nav-link' aria-current='page' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item pe-4'>
                <a className='nav-link' aria-current='page' href='#'>
                  Engineering
                </a>
              </li>

              <li className='nav-item pe-4'>
                <a className='nav-link' aria-current='page'>
                  Products
                </a>
              </li>

              <li className='nav-item pe-4'>
                <a className='nav-link'>Team</a>
              </li>
              <li className='nav-item pe-4'>
                <a className='nav-link'>News</a>
              </li>
              <li className='nav-item pe-4'>
                <a className='nav-link'>Careers</a>
              </li>
              <li className='nav-item pe-4'>
                <a
                  onClick={handleLogout}
                  className='nav-link'
                  style={{ cursor: 'pointer' }}
                >
                  Logout
                </a>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <button
                className='btn'
                type='submit'
                style={{
                  backgroundColor: '#4d8c52',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  borderRadius: '50px'
                }}
              >
                BOOK A LAUNCH
              </button>
            </form>
          </div>
        </div>
      </nav>
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
    </div>
  )
}

export default NavBar
