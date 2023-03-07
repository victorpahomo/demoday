import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Router } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
const items = [
  {
    label: "Home",
    href: "/home",
    top: "10px",
    left: "10px",
    height: "50px",
    width: "50px",
  },
  {
    label: "About",
    href: "/about",
    top: "70px",
    left: "10px",
    height: "50px",
    width: "50px",
  },
  {
    label: "Contact",
    href: "/contact",
    top: "130px",
    left: "10px",
    height: "50px",
    width: "50px",
  },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex w-screen h-screen  bg-primary-azulCeleste5 dark:bg-black p-5 ">
    <BrowserRouter>
    <Sidebar items={items} />
    </BrowserRouter>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
