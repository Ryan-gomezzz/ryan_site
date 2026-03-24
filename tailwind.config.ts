import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#09090b",
        surface: "#18181b",
        border: "#27272a",
        signal: "#22d3ee",
        energy: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        signal: "0 0 26px rgba(34, 211, 238, 0.16)",
      },
      transitionTimingFunction: {
        mechanical: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "pulse-energy": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-energy": "pulse-energy 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
