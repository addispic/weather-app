import React from 'react'
import {Routes, Route} from 'react-router-dom'

// components
// header
import Header from './components/Header'

// pages
// home
import Home from './pages/Home'
// login
import Login from './pages/Login'
// dashboard
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='h-[100vh] w-[100vw] pt-[5vh]'>
      {/* header */}
      <Header />
      {/* routes */}
      <Routes>
        {/* home */}
        <Route element={<Home />} path='/'></Route>
        {/* login */}
        <Route element={<Login />} path='/login'></Route>
        {/* dashboard */}
        <Route element={<Dashboard />} path='/dashboard'></Route>
      </Routes>
    </div>
  )
}

export default App