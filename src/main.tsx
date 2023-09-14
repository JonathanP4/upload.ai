import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
