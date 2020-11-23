module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
    extends: [
      'eslint:recommended',
      "plugin:vue/recommended",
      'plugin:prettier/recommended',
    ],
    // required to lint *.vue files
    plugins: ["vue"],
    // add your custom rules here
    rules: {
      "semi": [2, "never"],
      "no-console": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
        }
      }],
      "prettier/prettier": ["error", { "semi": false }]
    }
  };