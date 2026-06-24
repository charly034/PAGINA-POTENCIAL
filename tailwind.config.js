/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary: Azul naval oscuro (color del logo)
        brand: {
          50: "#f0f4f8",
          100: "#d9e5ef",
          200: "#b4cadf",
          300: "#84a9ca",
          400: "#5485b2",
          500: "#3a6a96",
          600: "#2e547a",
          700: "#1B3A54",
          800: "#142c40",
          900: "#0d1e2d",
        },
        // Secundario: Teal/petróleo (mapa LATAM)
        petrol: {
          50: "#eef8f9",
          100: "#c6e8eb",
          200: "#97d2d8",
          300: "#5eb6bf",
          400: "#2f99a5",
          500: "#1d7e89",
          600: "#1B6B73",
          700: "#145860",
          800: "#0e4248",
          900: "#092e33",
        },
        // Acento: Coral/terracota (textos y puntos del mapa Instagram)
        coral: {
          100: "#fbeee9",
          200: "#f5d3c8",
          300: "#ecab99",
          400: "#e18270",
          500: "#D97052",
          600: "#c05a3d",
          700: "#9b452e",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px -16px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        // Hero uses brand navy and petrol tones aligned with real palette
        "hero-pattern":
          "radial-gradient(circle at 12% 22%, rgba(27, 58, 84, 0.10), transparent 34%), radial-gradient(circle at 90% 8%, rgba(27, 107, 115, 0.15), transparent 28%), linear-gradient(160deg, #f5f7f9 0%, #ffffff 42%, #eef3f7 100%)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 700ms ease-out forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
