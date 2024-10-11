import withMT from "@material-tailwind/react/utils/withMT";
// /** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        nunito: ["Nunito", " sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        courgette: ["Courgette", "cursive"],
        RacingSans: ["Racing Sans One", "sans-serif"],
        Lobster: ["Lobster", " sans-serif"],
      },
      backgroundImage: {
        bg1: "url('/image/bg1.png')",
        bg2: "url('/image/bg2.png')",
        bg3: "url('/image/bg3.png')",
        bgd1: "url('/image/bgd1.png')",
        bgd2: "url('/image/house 1.jpg')",
        bgd3: "url('/image/bgd3.png')",
      },
    },
  },

  plugins: [import("@tailwindcss/line-clamp")],
});
