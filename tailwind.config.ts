import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'background': '#141414',
        'label': '#E7EEEB',
        'caption': '#A8ADAA',
        'placeholder': '#7D817F',
        'transparentbg': 'rgba(231, 238, 235, 0.08)',
        'bodybg': '#1D1D1D',
      },
      boxShadow: {
        'whitepers': '0px 0px 16px 0px rgba(255, 255, 255, 0.15)',
        'innerwhole': '0px 0px 16px 0px rgba(0, 0, 0, 0.40) inset',
      },
    },
  },
  plugins: [],
};
export default config;
