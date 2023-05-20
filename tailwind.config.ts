import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      pop: ['Poppins'],
      popbold: ['Poppins-Bold'],
      inter: ['Inter'],
      interbold: ['Inter-Bold'],
    }
  },
  plugins: [],
} satisfies Config;
