module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    'prefer-promise-reject-errors': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/html-indent": ["warn", 2, {
      "attribute": 2,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
