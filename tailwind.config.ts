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
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "accent-color": "var(--accent-color)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        gradient: "var(--bg-gradient)",
        hero1: "url('/assets/love-in-classroom.jpg')",
        hero2: "url('/assets/lovers-eating.jpg')",
        hero3: "url('/assets/happy-relationship.jpg')",
        "hero-gradient": "var(--hero-gradient)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
export default config;
