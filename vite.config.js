import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgSprite from "vite-plugin-svg-sprite"; // Імпортуємо плагін для SVG спрайтів

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSprite({
      include: "src/assets/**/*.svg", // Шлях до SVG файлів для спрайту
    }),
  ],
  build: {
    sourcemap: true,
  },
});
