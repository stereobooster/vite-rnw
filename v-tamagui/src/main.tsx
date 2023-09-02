import React from "react";
// import { AppRegistry } from "react-native";
import ReactDOM from "react-dom/client";
import { Root } from "./Root.tsx";
import "./index.css";

const rootTag = document.getElementById("root") as HTMLElement;
// AppRegistry.registerComponent("App", () => Root);
// AppRegistry.runApplication("App", { rootTag });

ReactDOM.createRoot(rootTag).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
