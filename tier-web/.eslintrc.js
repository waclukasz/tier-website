module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    options: {
      fix: true
    }
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
