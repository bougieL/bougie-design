module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    semi: ['warn', 'never']
  }
}
