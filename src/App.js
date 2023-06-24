import './App.css'
import Login from './UiComponents/Login'
import Signup from './UiComponents/Signup'
import Content from './UiComponents/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/content' element={<Content />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
