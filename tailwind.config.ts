import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
      colors: {
        purple: {
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#4c1d95",
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "floatSlow 7s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spinReverse 30s linear infinite",
        "glow-pulse": "glowPulse 4s ease infinite",
        "grad-shift": "gradShift 4s ease infinite",
        "border-flow": "borderFlow 3s ease infinite",
        marquee: "marquee 22s linear infinite",
        "fade-up": "fadeUp .7s ease both",
        "scale-in": "scaleIn .5s ease both",
        dot: "dotPulse 2s infinite",
        progress: "progressBar 1s ease forwards",
        "text-shimmer": "textShimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
        spinReverse: { to: { transform: "rotate(-360deg)" } },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 20px rgba(124,58,237,.3)" },
          "50%": { boxShadow: "0 0 50px rgba(124,58,237,.7),0 0 100px rgba(124,58,237,.2)" },
        },
        gradShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        borderFlow: {
          "0%,100%": { borderColor: "rgba(124,58,237,.2)" },
          "50%": { borderColor: "rgba(168,85,247,.6)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(.85)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        dotPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(34,197,94,.5)" },
          "50%": { boxShadow: "0 0 0 8px rgba(34,197,94,0)" },
        },
        progressBar: {
          from: { width: "0%" },
          to: { width: "var(--w, 100%)" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundSize: { "300%": "300%" },
    },
  },
  plugins: [],
};
export default config;
