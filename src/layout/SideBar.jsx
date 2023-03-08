import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CoursesIcon, GradesIcon, HomeIcon, TrainingIcon } from "../assets";
import SidebarLink from "./SidebarLink";

const SideBar = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div
      className="_displaySideBar flex flex-col justify-center items-end w-12 hover:w-40 pl-2 bg-primary-azulCeleste5 h-full ease-in-out duration-200 transition-all"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <SidebarLink
        showText={showText}
        to="/home"
        icon={HomeIcon}
        text="Inicio"
      />
      <SidebarLink
        showText={showText}
        to="/training"
        icon={TrainingIcon}
        text="Formacion"
      />
      <SidebarLink
        showText={showText}
        to="/grades"
        icon={GradesIcon}
        text="Notas"
      />
      <SidebarLink
        showText={showText}
        to="/courses"
        icon={CoursesIcon}
        text="Cursos"
      />
    </div>
  );
};

export default SideBar;

// const SideBar = () => {
//   const [hoverIconHome, setHoverIconHome] = useState("fill-white");
//   const [hoverIconTraining, setHoverIconTraining] = useState("fill-white");
//   const [hoverIconGrades, setHoverIconGrades] = useState("fill-white");
//   const [hoverIconCourser, setHoverIconCourser] = useState("fill-white");
//   const [showText, setShowText] = useState(false);

//   return (
//     <div
//       className="_displaySideBar flex flex-col justify-center items-end w-12 hover:w-40 pl-2 bg-primary-azulCeleste5 h-full"
//       onMouseEnter={() => setShowText(true)}
//       onMouseLeave={() => setShowText(false)}
//     >
//       <Link
//         to="/home"
//         className="flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center ease-in-out duration-200 font-semibold text-white hover:text-black hover:bg-white"
//         onMouseEnter={() => setHoverIconHome("fill-black")}
//         onMouseLeave={() => setHoverIconHome("fill-white")}
//       >
//         <HomeIcon
//           className={`ease-in-out duration-200 w-8 pr-3 ${hoverIconHome}`}
//         />

//         {showText && <span className="mr-10">Inicio</span>}
//       </Link>

//       <Link
//         to="/training"
//         className="flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center ease-in-out duration-200 font-semibold text-white hover:text-black hover:bg-white"
//         onMouseEnter={() => setHoverIconTraining("fill-black")}
//         onMouseLeave={() => setHoverIconTraining("fill-white")}
//       >
//         <TrainingIcon
//           className={`ease-in-out duration-200 w-8 pr-3 ${hoverIconTraining}`}
//         />
//         {showText && <span className="mr-1">Formacion</span>}
//       </Link>
//       <Link
//         to="/grades"
//         className="flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center ease-in-out duration-200 font-semibold text-white hover:text-black hover:bg-white"
//         onMouseEnter={() => setHoverIconGrades("fill-black")}
//         onMouseLeave={() => setHoverIconGrades("fill-white")}
//       >
//         <GradesIcon
//           className={`ease-in-out duration-200 w-8 pr-3 ${hoverIconGrades}`}
//         />
//         {showText && <span className="mr-9">Notas</span>}
//       </Link>

//       <Link
//         to="/courses"
//         className="flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center ease-in-out duration-200 font-semibold text-white hover:text-black hover:bg-white"
//         onMouseEnter={() => setHoverIconCourser("fill-black")}
//         onMouseLeave={() => setHoverIconCourser("fill-white")}
//       >
//         <CoursesIcon
//           className={`ease-in-out duration-200 w-8 pr-3 ${hoverIconCourser}`}
//         />
//         {showText && <span className="mr-8">Cursos</span>}
//       </Link>
//     </div>
//   );
// };

// export default SideBar;