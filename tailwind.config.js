// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         fadeUp: "fadeUp 0.8s ease-out forwards",
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        slate: {
          950: "#0f172a",
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4b5563",
        },
        blue: {
          950: "#0c1e3a",
        },
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to bottom right, #0f172a, #0c1e3a, #0f172a)",
      },
    },
  },
  plugins: [],
};
