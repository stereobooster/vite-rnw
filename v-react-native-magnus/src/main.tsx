import React from "react";
import { AppRegistry } from "react-native";
// import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "react-native-magnus";

const Root = () => (
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

const rootTag = document.getElementById("root");
AppRegistry.registerComponent("Root", () => Root);
AppRegistry.runApplication("Root", { rootTag });

// ReactDOM.createRoot(rootTag!).render(<Root />);
