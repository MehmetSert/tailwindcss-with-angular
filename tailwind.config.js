module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.ENABLE_PURGE === 'yes',
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
