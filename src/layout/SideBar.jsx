import React, { useState } from "react";
import {
  CodeBotIcon,
  CoursesIcon,
  GradesIcon,
  HomeIcon,
  TrainingIcon,
  ServicesIcon,
} from "../assets";
import SidebarLink from "./SidebarLink";
import isoWhite from "../assets/CodeLMSIcon/ISOWhite.svg";
import logoWhite from "../assets/CodeLMSIcon/logoWhite.svg";

const SideBar = ({ props }) => {
  // Estado para controlar si se muestra el texto en los íconos
  const [showText, setShowText] = useState(false);
  return (
    <div
      className=" _displaySideBar z-50 h-full max-h-screen  flex flex-col  fixed  items-end w-12 gap-4 hover:w-40 pl-2 bg-primary-azulCeleste5 ease-in-out hover:duration-200 hover:transition-all"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <div className="absolute flex flex-col top-8 gap-7 ">
        <figure className="z-40 flex justify-end rounded-md ">
          {showText ?
            (
              // Mostrar el logotipo de texto cuando showText es true
              <img className="mt-3 mr-3 mb-2" src={logoWhite} alt="CodeLMS icon" />
            )
            : (
              // Mostrar el logotipo de ISO cuando showText es false
              <div className=" w-9 h-9 border-primary-white border-2 p-1 rounded-md flex justify-center items-center mr-2 border-opacity-25">
                <img className="w-8 h-8 " src={isoWhite} alt="CodeLMS icon" />
              </div>
            )}
        </figure>
        {/* Componentes SidebarLink para las diferentes secciones */}
        <SidebarLink
          page={props}
          showText={showText}
          to="/home"
          icon={HomeIcon}
          text="Inicio"
        />
        <SidebarLink
          page={props}
          showText={showText}
          to="/training"
          icon={TrainingIcon}
          text="Formación"
        />

        <SidebarLink
          page={props}
          showText={showText}
          to="/grades"
          icon={GradesIcon}
          text="Notas"
        />
        <SidebarLink
          page={props}
          showText={showText}
          to="/courses"
          icon={CoursesIcon}
          text="Cursos"
        />
        <SidebarLink
          page={props}
          showText={showText}
          to="/codebot"
          icon={CodeBotIcon}
          text="CodeBot"
        />
        <SidebarLink
          page={props}
          showText={showText}
          to="/services"
          icon={ServicesIcon}
          text="Servicios"
        />
      </div>
    </div>
  );
};

export default SideBar;
