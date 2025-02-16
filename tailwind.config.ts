import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f7f3ee',
          200: '#eee6dd',
          500: '#f47920',
          900: '#3f3f3f',
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
