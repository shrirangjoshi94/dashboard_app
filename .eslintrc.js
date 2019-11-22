module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    quotes: ['off'],
    'no-console': ['off'],
    eqeqeq: ['error', 'always'],
    'max-len': ['off'],
    'space-before-keywords': ['off']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
