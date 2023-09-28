import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

// Crea un nuevo "root" de React en el elemento con el id "root" del DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <div >
    {/* Proporciona el estado global de Redux a toda la aplicación */}
    <Provider store={store}>
      {/* Configura el enrutador de React Router */}
      <BrowserRouter>
        {/* Renderiza el componente principal de la aplicación */}
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
