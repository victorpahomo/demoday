import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./layout/Sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex w-screen h-screen gap-2 bg-primary-Azul5 dark:bg-black p-5 ">
    <Sidebar />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
