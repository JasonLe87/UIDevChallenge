module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "White" : "#FFFFFF",
        "Mocha-5" : "#F7F6F6",
        "Mocha-10" : "#EEECEC",
        "Mocha-20" : "#DFDEDE",
        "Mocha-30" : "#BFBEBC",
        "Mocha-40" : "#9F9D9B",
        "Mocha-50" : "#7F7D79",
        "Mocha-60" : "#5F5C58",
        "Mocha-70" : "#474542",
        "Mocha-80" : "#302E2C",
        "Ultrablue-5" : "#E8F2F4",
        "Ultrablue-10" : "#CEE3E8",
        "Ultrablue-20" : "#9DC7D2",
        "Ultrablue-30" : "#6BAABB",
        "Ultrablue-40" : "#3A8EA5",
        "Ultrablue-50" : "#09728E",
        "Ultrablue-60" : "#077566B",
        "Ultrablue-70" : "#04485B",
        "Ultrablue-80" : "#053947",
        "acknowledge-color": "#4FA806",
        "hi-alert-color": "#E42508",
        "alert-color": "#E4A206",
        "color-gold": "#F7E0AA"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    './src/**/*.js',
    './src/*.js'
  ],
}
