import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, type VitePWAOptions } from "vite-plugin-pwa";
import { qrcode } from "vite-plugin-qrcode";
// import { esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "pwa/apple-icon-180.png", "logo.svg"],
  manifest: {
    name: "vite-rnw",
    short_name: "vite-rnw",
    description: "react native web PWA",
    orientation: "portrait",
    lang: "en",
    display: "standalone",
    theme_color: "#000000",
    icons: [
      {
        src: "/pwa/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/pwa/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
  base: "/",
};

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
  plugins: [react(), VitePWA(pwaOptions), qrcode()],
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
