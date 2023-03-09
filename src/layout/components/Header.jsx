import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonNotification,
  ButtonProfile,
  ButtonTheme,
} from "../../components";

const Header = ({props}) => {
  const rol = useSelector((state) => state.auth.user.rol);
  return (
    <div className="navbar z-40 fixed w-[calc(100%-4.25rem)] top-5  bg-white rounded-t-lg overflow-hidden">
      <div className="flex-1">
        <h1 className="pl-4 normal-case text-xl font-medium text-primary-azulCeleste3">{props}</h1>
      </div>

      <div className="sm:gap-2">
        <ButtonNotification />
        <ButtonProfile />
      </div>
    </div>
  );
};

export default Header;
