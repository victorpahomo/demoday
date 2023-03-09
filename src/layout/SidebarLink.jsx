import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ to, icon: Icon, text, showText, page }) => {
  let [hoverIcon, setHoverIcon] = useState("fill-white");
  let linkStyles = "text-white hover:text-primary-azulCeleste5 hover:bg-white flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center ease-in-out duration-100 font-semibold";
  if (page === text) {
    linkStyles = "text-primary-azulCeleste5 hover:text-primary-azulCeleste5 flex h-10 w-36 justify-end items-center rounded-l-full bg-white p-1 text-center ease-in-out duration-100 font-semibold" 
    hoverIcon = "fill-primary-azulCeleste5"
  }
  return (
    <Link
      to={to}
      className={linkStyles}
      onMouseEnter={() => {
        setHoverIcon("fill-primary-azulCeleste5");
      }}
      onMouseLeave={() => {
        setHoverIcon("fill-white");
      }}
    >
      {showText ? (
        <div className="flex justify-start w-32">
          <Icon className={`ease-in-out duration-200 w-8 pr-3 ${hoverIcon}`} />
          {showText && <span>{text}</span>}
        </div>
      ) : (
        <Icon className={`ease-in-out duration-200 w-8 pr-3 ${hoverIcon}`} />
      )}

    </Link>
  );
};

export default SidebarLink;
