import { useState } from "react";
import { Link } from "react-router-dom";
const SidebarLink = ({ to, icon: Icon, text, showText }) => {
  const [hoverIcon, setHoverIcon] = useState("fill-white");
  //   const [showText, setShowText] = useState(false);

  return (
    <Link
      to={to}
      className="flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center ease-in-out duration-200 font-semibold text-white hover:text-primary-azulCeleste5 hover:bg-white"
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
      {/* {!showText && (
        <Icon className={`ease-in-out duration-200 w-8 pr-3 ${hoverIcon}`} />
      )} */}

      {/* <div className="flex justify-start w-32">
        <Icon className={`ease-in-out duration-200 w-8 pr-3 ${hoverIcon}`} />
        {showText && <span>{text}</span>}
      </div> */}
    </Link>
  );
};

export default SidebarLink;
