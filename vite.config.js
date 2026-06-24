import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const isVercel = process.env.VERCEL === "1";

  return {
    base: isVercel ? "/" : "/PAGINA-POTENCIAL/",
    plugins: [react()],
    build: {
      target: "es2015",
      cssCodeSplit: false,
    },
  };
});
