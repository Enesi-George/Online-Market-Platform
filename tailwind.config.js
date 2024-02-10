/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      screens: {
        lg: "1024px", // You can adjust the breakpoint value
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
