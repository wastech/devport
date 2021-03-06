module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/no-unused-vars': 'off',
    "linebreak-style": ["error", "windows"],
    "eqeqeq": "off",
    "curly": "warn",
    "quotes": ["warn", "double"]
  },
}
