import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      darkMode: "class", // 👈 Add this
      content: ["./index.html", "./src/**/*.{js,jsx}"],
      theme: {
        extend: {},
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
