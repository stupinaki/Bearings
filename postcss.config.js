const postcssNesting = require("postcss-nesting");
const postcssSimpleVars = require("postcss-simple-vars");

module.exports = {
  localsConvention: "camelCase",
  plugins: [postcssNesting, postcssSimpleVars],
  modules: {
    localsConvention: 'camelCase',
  },
};
