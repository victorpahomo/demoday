import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../features/auth/authSlice'
 
const Home = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }
  return (
    <div>
      <button onClick={handleClick}>Cerrar Sesion</button>
    </div>
  )
}

export default Home