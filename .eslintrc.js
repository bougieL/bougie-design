module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    semi: ['warn', 'never']
  }
}
