import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0f172a",
        storm: "#1e293b",
        cloud: "#f8fafc",
        accent: "#22d3ee",
      },
    },
  },
  plugins: [],
};

export default config;
