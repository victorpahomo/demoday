import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { cleanAllSlices } from "../services/dataFirebaseService";
import { logoutService } from "../services/authFirebaseService";
import { Link } from "react-router-dom";
import UserIcon from "../assets/UserIcon.jsx";

const ButtonProfile = () => {
  // Obtener datos del usuario desde el estado de Redux
  const email = useSelector((state) => state.user.user.email);
  const name = useSelector((state) => state.user.user.name);
  const picture = useSelector((state) => state.user.user.picture);
  const dispatch = useDispatch();
  // Manejar el clic en el botón de cierre de sesión
  const handleClick = () => {
    // Llamar a la función de cierre de sesión desde el servicio de Firebase
    logoutService(dispatch);
    // Limpiar los datos en el estado de Redux
    cleanAllSlices(dispatch);
  };

  return (
    <div
      className="dropdown dropdown-end tooltip tooltip-bottom"
      data-tip="Perfil"
    >
      <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
        <div className=" w-10 rounded-full bg-slate-200 ">
          {picture ? (
            <img src={picture} />
          ) : (
            <div className="flex w-full h-full justify-center items-center">
              <UserIcon className="fill-gray-400 w-5 h-5" />
            </div>
          )}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 menu menu-compact dropdown-content bg-white rounded-box w-52 shadow-lg shadow-slate-500 text-slate-600"
      >
        {/* Mostrar el nombre y correo electrónico del usuario */}
        <p className="text-center font-semibold text-lg">{name}</p>
        <p className="text-center">{email}</p>
        {/* Enlaces para el perfil y ajustes */}
        <li>
          <Link
            to="/profile"
            className="hover:bg-primary-AzulVerde2 active:bg-primary-AzulVerde1 hover:text-white"
          >
            Perfil
          </Link>
        </li>

        <li>
          <Link
            to="/notifications"
            className="hover:bg-primary-AzulVerde2 active:bg-primary-AzulVerde1 hover:text-white"
          >
            Ajustes
          </Link>
        </li>
        {/* Botón para cerrar sesión */}
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
