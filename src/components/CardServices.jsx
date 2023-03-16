import React from "react";
import { TechnicalSupportIcon } from "../assets";

const CardServices = ({ title, icon, description, link }) => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-4">
      <div className="card h-80 shadow-xl bg-primary-azulCeleste1 text-primary-Azul5">
        {icon}
        <div className="h-96 bg-center bg-cover bg-no-repeat" />
        <div className="card-body px-">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-around"></div>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <a
              href={link}
              className="btn btn-primary btn-xs bg-primary-AzulVerde4 border-none hover:bg-primary-Azul5"
            >
              Ir {title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
