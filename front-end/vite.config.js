import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@data": path.resolve(__dirname, "./src/data/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@context": path.resolve(__dirname, "./src/context/"),
    },
  },
});
