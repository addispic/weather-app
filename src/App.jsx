import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'

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

// slices
// weather slice
import {getCityWeatherData} from './features/weather/weatherSlice'

const App = () => {
  // hooks
  // dispatch
  const dispatch = useDispatch()

  // get city weather data
  useEffect(()=>{
    dispatch(getCityWeatherData("Addis Ababa"))
  },[])
  return (
    <div className='h-[100vh] w-[100vw] pt-[5vh] flex flex-col overflow-hidden'>
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