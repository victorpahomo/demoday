import React from "react";
import { TechnicalSupportIcon } from "../assets";

const CardServices = ({ title, icon: Icon, description, link, stylesIcon }) => {
  return (
    <div className="mt-2 card w-64 h-auto shadow-md shadow-gray-400 bg-white text-primary-Azul5 transition-all hover:-translate-y-2 ">
      <div className="flex justify-center pt-5">
        <Icon className={stylesIcon} />
      </div>
      <div className="flex flex-col items-center p-3 text-primary-AzulVerde4">
        <h2 className="card-title text-primary-azulCeleste4 text-xl">{title}</h2>
        <div className="flex text-center"></div>
        <p className="text-base">{description}</p>
        <div className="card-actions justify-center">
          <label
            id={title}
            htmlFor="my-modal-6"
            className="btn btn-primary btn-sm bg-gray-300 border-none hover:bg-gray-400  mt-2 w-32 text-primary-azulCeleste5 shadow-md"
          >
            Abrir
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
