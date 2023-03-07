import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CoursesIcon, GradesIcon, HomeIcon, TrainingIcon } from "../assets";

const SideBar = () => {
  const [hoverIcon, setHoverIcon] = useState("fill-white");

  return (
    <div className="_displaySideBar flex flex-col justify-center items-end w-10 hover:w-28 bg-primary-azulCeleste5 h-full">
      <Link
        to="/home"
        className="flex items-center h-10 w-24 justify-start rounded-l-lg bg-primary-azulCeleste5 gap-1 p-1 text-center ease-in-out duration-200 font-semibold text-white hover:text-black hover:bg-white"
        onMouseEnter={() => setHoverIcon("fill-black")}
        onMouseLeave={() => setHoverIcon("fill-white")}
      >
        <HomeIcon
          className={`ease-in-out duration-200 w-6 h-6 ${hoverIcon}`}
          fill={hoverIcon}
        />
        <span>Inicio</span>
      </Link>
      <Link
        className="flex gap-1 p-1 items-center justify-start rounded-l-lg bg-primary-azulCeleste5 hover:bg-white h-10 w-24 text-center ease-in-out duration-300"
        to="/courses"
      >
        <CoursesIcon className={"w-6 h-6 fill-black"} /> Cursos
      </Link>
      <Link
        className="flex gap-1 p-1 items-center justify-start rounded-l-lg bg-primary-azulCeleste5 hover:bg-white h-10 w-24 text-center ease-in-out duration-300"
        to="/grades"
      >
        <GradesIcon className={"w-6 h-6 fill-black"} /> Notas
      </Link>
      <Link
        className="flex gap-1 p-1 items-center justify-start rounded-l-lg bg-primary-azulCeleste5  hover:bg-white h-10 w-24 text-center ease-in-out duration-300"
        to="/training"
      >
        <TrainingIcon className={"w-6 h-6 fill-black"} /> Formación
      </Link>
    </div>
  );
};

export default SideBar;

// import "./Sidebar.css";
// import React, { useState, useEffect } from "react";
// import { HomeIcon } from "../assets";

// const SIDEBAR_SELECTOR = "#accordian";
// const SELECTOR_ACTIVE_SELECTOR = ".selector-active";

// const sidebarItems = [
//   { index: 1, icon: "fas fa-tachometer-alt", label: "Dashboard" },
//   { index: 2, icon: "far fa-address-book", label: "Address Book" },
//   { index: 3, icon: "far fa-clone", label: "Components" },
//   { index: 4, icon: "far fa-calendar-alt", label: "Calendar" },
// ];

// function SideBar() {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [activeItemTop, setActiveItemTop] = useState(0);
//   const [activeItemHeight, setActiveItemHeight] = useState(0);

//   useEffect(() => {
//     const accordianRef = document.querySelector(SIDEBAR_SELECTOR);
//     const selectorActiveRef = document.querySelector(SELECTOR_ACTIVE_SELECTOR);
//     const activeItem = accordianRef.querySelector("li.active");
//     const activeItemTop = activeItem.offsetTop;
//     const activeItemHeight = activeItem.offsetHeight;
//     selectorActiveRef.style.top = `${activeItemTop}px`;
//     selectorActiveRef.style.height = `${activeItemHeight}px`;
//     const path = window.location.pathname.split("/").pop();
//     const target = accordianRef.querySelector(`a[href="${path}"]`);
//     if (target) {
//       setActiveIndex(Number(target.parentNode.dataset.index));
//     }
//   }, []);

//   const handleItemClick = (index, top, height) => {
//     setActiveIndex(index);
//     setActiveItemTop(top);
//     setActiveItemHeight(height);
//   };

//   return (
//     <div id="accordian" className="flex items-center justify-end">
//       <ul className="show-dropdown main-navbar">
//         <div
//           className="selector-active"
//           style={{ top: `${activeItemTop}px`, height: `${activeItemHeight}px` }}
//         >
//           <div className="top"></div>
//           <div className="bottom"></div>
//         </div>
//         {sidebarItems.map(({ index, icon, label }) => {
//           const itemRef = React.createRef();
//           return (
//             <li
//               key={index}
//               data-index={index}
//               className={`Sidebar-item ${
//                 activeIndex === index ? "active " : null
//               }`}
//               onClick={() =>
//                 handleItemClick(
//                   index,
//                   itemRef.current.offsetTop,
//                   itemRef.current.offsetHeight
//                 )
//               }
//               ref={itemRef}
//             >
//               <a className="w-auto" href={`#${label}`}>
//                 <div className="flex flex-1 items-center justify-end gap-1 p-1">
//                   <HomeIcon className={"h-7 w-7"} />
//                   <p className="truncate">{label}</p>
//                 </div>
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default SideBar;
