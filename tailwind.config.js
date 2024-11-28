/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",

  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flyonui/dist/js/*.js",
    "./node_modules/@flyon/ui/**/*.{js,ts,jsx,tsx}",// Certifique-se de que todos os arquivos HTML e TS sejam processados
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}
