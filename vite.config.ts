import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

// https://github.com/necolas/react-native-web/issues/2292
// https://github.com/th3rdwave/react-native-safe-area-context/issues/202#issuecomment-1204474830
const extensions = [
  ".web.tsx",
  ".tsx",
  ".web.ts",
  ".ts",
  ".web.jsx",
  ".jsx",
  ".web.js",
  ".js",
  ".css",
  ".json",
];

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  define: {
    // https://github.com/bevacqua/dragula/issues/602#issuecomment-1296313369
    global: "window",
    // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
    "process.env": {},
    __DEV__: command === "serve" || mode === "development",
  },
  resolve: {
    extensions: extensions,
    alias: {
      "react-native": "react-native-web",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      // need either this or the plugin below
      loader: { ".js": "jsx" },
      // plugins: [
      //   esbuildFlowPlugin(/\.(flow|jsx?)$/, (path) =>
      //     /\.jsx$/.test(path) ? "jsx" : "jsx"
      //   ),
      // ],
    },
  },
}));
