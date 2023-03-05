import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <h1 className="normal-case text-xl">Inicio</h1>
    </div>
    <div className="flex-none gap-2">

      <div className="dropdown dropdown-end hover:open:">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="">
              Profile
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Header;
