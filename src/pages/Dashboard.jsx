import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

// slices
// users
import {userSelector} from '../features/users/usersSlice'

const Dashboard = () => {
  // states from slice
  // users
  const user = useSelector(userSelector)
  // hooks
  // navigate
  const navigate = useNavigate()

  // effects
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard