module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": ["error", "never"],
    "quotes": ["off"],
    "no-console": ["off"],
    "eqeqeq": ["error", "always"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
