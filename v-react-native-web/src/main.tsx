import React from "react";
import { AppRegistry } from "react-native";
// import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const Root = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootTag = document.getElementById("root");
AppRegistry.registerComponent("App", () => Root);
AppRegistry.runApplication("App", { rootTag });

// ReactDOM.createRoot(rootTag!).render(<Root />);
