import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

const Home = () => {
  const dispatch = useDispatch()
  const rol  = useSelector(state => state.auth.user.rol)

  const handleClick = () => {
    dispatch(logout())
  }
  return (
    <div>
      <button onClick={handleClick}>Cerrar Sesion</button>
      { rol === "professor" && <h1>Home Profe</h1> }
      { rol === "student" && <h1>Home Estudiante</h1> }
      { rol === "admin" && <h1>Home Admin</h1> }
    </div>
  )
}

export default Home