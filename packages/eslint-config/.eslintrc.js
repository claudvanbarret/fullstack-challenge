module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ["airbnb-base", "prettier", "eslint:recommended", "plugin:jest/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "prettier/prettier": "error",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off"
  }
};
