import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
const ButtonProfile = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://static3.abc.es/media/summum/2021/10/01/maxi_iglesias-kXKH--620x349@abc.jpeg" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="hover:bg-primary-AzulVerde2 active:bg-primary-AzulVerde1 hover:text-white">
            Perfil
          </a>
        </li>
        <li>
          <a className="hover:bg-primary-AzulVerde2 active:bg-primary-AzulVerde1 hover:text-white">
            Ajustes
          </a>
        </li>
        <li>
          <button
            onClick={handleClick}
            className="hover:bg-red-600 active:bg-primary-AzulVerde1 hover:text-white"
          >
            Cierre de sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonProfile;
