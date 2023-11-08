import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  publicDir: "public",
  outDir: "../docs",
  server: {
    open: true,
  },
  define: {
    // Make environment variables available in your app
    "process.env": process.env,
  },
});
