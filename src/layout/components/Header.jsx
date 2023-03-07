import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonNotification,
  ButtonProfile,
  ButtonTheme,
} from "../../components";

const Header = () => {
  const rol = useSelector((state) => state.auth.user.rol);

  return (
    <div className="navbar bg-white rounded-lg">
      <div className="flex-1">
        <h1 className="normal-case text-xl">Inicio</h1>
      </div>

      <div className="sm:gap-2">
        <ButtonNotification />
        <ButtonProfile />
      </div>
    </div>
  );
};

export default Header;