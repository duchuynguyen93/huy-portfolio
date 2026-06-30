import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set base to "/<repo>/". For a custom domain or user-page, keep "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
