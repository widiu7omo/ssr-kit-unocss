import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import UnoCSS from "unocss/vite";
import Inspect from "vite-plugin-inspect";

const config: UserConfig = {
  plugins: [
    UnoCSS(),
    react(),
    ssr(),
    Inspect({ build: true, outputDir: ".vite-inspect" }),
  ],
  resolve: {
    alias: {
      "#app": __dirname,
    },
  },
};

export default config;
