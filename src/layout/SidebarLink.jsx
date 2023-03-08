import { useState } from "react";
import { Link } from "react-router-dom";
const SidebarLink = ({ to, icon: Icon, text, showText }) => {
  const [hoverIcon, setHoverIcon] = useState("fill-white");
//   const [showText, setShowText] = useState(false);

  return (
    <Link
      to={to}
      className="flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center ease-in-out duration-200 font-semibold text-white hover:text-black hover:bg-white"
      onMouseEnter={() => {
        setHoverIcon("fill-black");
        
      }}
      onMouseLeave={() => {
        setHoverIcon("fill-white");
        
      }}
    >
      <Icon className={`ease-in-out duration-200 w-8 pr-3 ${hoverIcon}`} />
      {showText && <span>{text}</span>}
    </Link>
  );
};

export default SidebarLink;
