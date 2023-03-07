import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex w-screen h-screen  bg-primary-azulCeleste5 dark:bg-black p-5 ">
     <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
