import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Sidebar from "../layout/Sidebar";

const Home = () => {
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className="w-full h-full bg-white rounded-lg">
           
      <div className="body w-full h-full bg-white rounded-lg">
        <button onClick={handleClick}>Cerrar Sesion</button>
        {rol === "professor" && <h1>Home Profe</h1>}
        {rol === "student" && <h1>Home Estudiante</h1>}
        {rol === "admin" && <h1>Home Admin</h1>}
        <h1>{useSelector((state) => state.auth.user.displayName)}</h1>
      </div>
    </div>
  );
};

export default Home;
