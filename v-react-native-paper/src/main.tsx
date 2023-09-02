import React from "react";
import { AppRegistry } from "react-native";
// import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PaperProvider } from "react-native-paper";

// start: inject icons used by react-native-paper
import iconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
const iconFontStyles = `@font-face { src: url(${iconFont}); font-family: MaterialCommunityIcons; }`;
const style = document.createElement("style");
style.appendChild(document.createTextNode(iconFontStyles));
document.head.appendChild(style);
// end: inject icons used by react-native-paper

const Root = () => (
  <React.StrictMode>
    <PaperProvider>
      <App />
    </PaperProvider>
  </React.StrictMode>
);

const rootTag = document.getElementById("root");
AppRegistry.registerComponent("App", () => Root);
AppRegistry.runApplication("App", { rootTag });

// ReactDOM.createRoot(rootTag!).render(<Root />);
