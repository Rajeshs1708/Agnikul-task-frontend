import React from 'react'
import './Content.css'
import Navbar from './NavBar'

function Content () {
  return (
    <>
      <Navbar />

      <div className='content'>
        <div style={{ width: '50%', padding: '60px 80px' }}>
          <h1 style={{ paddingBottom: '20px' }}>Bringing Space Within</h1>
          <h1 style={{ color: 'green', paddingBottom: '20px' }}>
            Everyons's Reach
          </h1>
          <p className='lead' style={{ fontWeight: '400' }}>
            Going to space shouldn't be the hardest part of utilizing, living in
            or working from space. So, why not design & build a product that
            makes the earth-to-space journey as simple, as quick and as
            affordable as possible?
          </p>
          <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            Check out Agnibaan
          </p>
        </div>
      </div>
    </>
  )
}

export default Content
