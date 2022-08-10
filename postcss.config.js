const postcssNesting = require("postcss-nesting");
const postcssSimpleVars = require("postcss-simple-vars");

module.exports = {
  localsConvention: "camelCaseOnly",
  plugins: [postcssNesting, postcssSimpleVars],
  modules: {
    localsConvention: 'camelCase',
  },
};
