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
import CodeLMSIcon from "../assets/CodeLMSIcon.svg";
import CodeLMSIcon2 from "../assets/CodeLMSIcon/logo_border.svg";
import CodeLMSIcon3 from "../assets/CodeLMSIcon/logoResp.svg";

const SideBar = ({ props }) => {
  const [showText, setShowText] = useState(false);
  return (
    <div
      className=" _displaySideBar z-50 h-full max-h-screen  flex flex-col  fixed  items-end w-12 gap-4 hover:w-40 pl-2 bg-primary-azulCeleste5 ease-in-out hover:duration-200 hover:transition-all"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <div className="absolute flex flex-col top-5 gap-7 ">
        <figure className="z-40  mr-5 rounded-md shadow-xl bg-white p-2">
          <img src={CodeLMSIcon2} alt="CodeLMS icon" />
        </figure>
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
