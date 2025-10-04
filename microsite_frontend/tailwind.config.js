// tailwind.config.js
module.exports = {
  darkMode: "class",
content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        teste: '#ff00ff', // cor magenta para teste
      },
    },
  },
  plugins: [],
}
