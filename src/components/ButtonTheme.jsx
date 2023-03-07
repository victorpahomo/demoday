import React, { useState } from "react";
import {SunIcon, MoonIcon} from "../assets";


const ButtonTheme = () => {
  const [DarkTheme, setDarkTheme] = useState(false);
  return (
    <button className="flex w-10 h-10 rounded-full justify-center items-center bg-slate-200 hover:bg-slate-300 active:bg-primary-azulCeleste2">
      {DarkTheme ? (
        <SunIcon className=" w-6 h-6 fill-black" />
      ) : (
        <MoonIcon className=" w-6 h-6 fill-black" />
      )}
    </button>
  );
};

export default ButtonTheme;
