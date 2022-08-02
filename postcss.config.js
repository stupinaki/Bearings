const postcssNesting = require("postcss-nesting");

module.exports = {
  localsConvention: "camelCaseOnly",
  plugins: [postcssNesting],
  modules: {
    localsConvention: 'camelCase',
  },
};
