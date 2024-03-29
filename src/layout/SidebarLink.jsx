import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ to, icon: Icon, text, showText, page }) => {
  let hoverIcon = "fill-white ";
  let cornerAnimation = false;
  let linkStyles = "text-primary-white hover:text-primary-azulCeleste5 hover:bg-primary-azulCeleste1 hover:bg-opacity-60 hover:shadow-md flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-azulCeleste5 p-1 text-center  font-semibold ";

  if (page === text) {
    linkStyles =
      "relative text-primary-azulCeleste5 hover:text-primary-azulCeleste5 flex h-10 w-36 justify-end items-center rounded-l-full bg-primary-white p-1 text-center  font-semibold";
    hoverIcon = "fill-primary-azulCeleste5";
    cornerAnimation = true;
  }

  return (
    <div>
      <Link to={to} className={linkStyles}>
        {showText ? (
          <div className="flex justify-start w-32">
            <Icon className={` w-8 pr-3 ${hoverIcon}`} />
            <span>{text}</span>
          </div>
        ) : (
          <Icon className={` w-8 pr-3 ${hoverIcon}`} />
        )}

        {cornerAnimation && (
          <div>
            <div
              id="curveTop"
              className="z-10 absolute right-0 bottom-10 menu  h-5 w-7 bg-primary-white"
            >
              <span className=" top-0 right-0 h-5 w-7  rounded-br-full bg-primary-azulCeleste5 "></span>
            </div>
            <div
              id="curveBott"
              className="z-10 absolute right-0 top-10 menu  h-5 w-7 bg-primary-white"
            >
              <span className=" top-0 right-0 h-5 w-7  rounded-tr-full bg-primary-azulCeleste5 "></span>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default SidebarLink;
