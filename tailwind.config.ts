import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: "#0a0e27",
          deep: "#1a1f3a",
          light: "#2a2f4a",
        },
        neon: {
          cyan: "#00f5ff",
          purple: "#b794f6",
          pink: "#ff6b9d",
        },
        ghibli: {
          green: "#a8e6cf",
          yellow: "#ffd93d",
          blue: "#a8d8ea",
        },
      },
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        fadeIn: "fadeIn 0.6s ease-in",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 245, 255, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 245, 255, 0.8), 0 0 30px rgba(0, 245, 255, 0.6)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

