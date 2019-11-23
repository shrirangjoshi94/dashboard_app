module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
