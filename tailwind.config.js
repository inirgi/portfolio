/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cm: "CommitMono"
      },
      colors: {
        body: "#444",
        primary: "#1095c1",
        blackLight: "#2d2d2d",
        orangePink: "#ffb088",
        whiteAlmost: "#f2f2f2"
      },
      backgroundColor: {
        card: "#141e26",
        progress: "#24333e"
      },
      textColor: {
        h1: "#edf0f3",
        h3: "#d5cde2",
        p: "#bbc6ce"
      }
    },
  },
  plugins: [],
}