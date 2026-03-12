import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Base path for GitHub Pages project site: https://techguyty.github.io/GenkiDrill
  base: "/genki-drill/",
  plugins: [react()],
});
