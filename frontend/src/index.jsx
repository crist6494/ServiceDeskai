import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

/*
Versiones Reaxt 17 infereiores
import ReactDom from "react-dom";
const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById("root"));
};
  
renderApp(); */

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea un root
root.render(<App />); // Renderiza el componente