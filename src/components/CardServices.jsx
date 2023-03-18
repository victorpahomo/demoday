import React from "react";
import { TechnicalSupportIcon } from "../assets";

const CardServices = ({ title, icon: Icon, description, link, stylesIcon }) => {
  return (
    <div className="mt-2 card w-60 h-auto shadow-xl shadow-gray-300 bg-primary-azulCeleste1 text-primary-Azul5 transition-all hover:-translate-y-2 ">
      <div className="flex justify-center pt-5">
        <Icon className={stylesIcon} />
      </div>
      <div className="flex flex-col items-center p-3 text-primary-AzulVerde4">
        <h2 className="card-title">{title}</h2>
        <div className="flex text-center"></div>
        <p className="text-base ">{description}</p>
        <div className="card-actions justify-center">
          <label
            id={title}
            htmlFor="my-modal-6"
            className="btn btn-primary btn-xs bg-primary-AzulVerde4 border-none hover:bg-primary-Azul5 mt-2 w-32"
          >
            Abrir
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
