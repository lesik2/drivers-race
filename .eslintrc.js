module.esports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native', 'eslint-config-prettier'],
  plugins: ['prettier', 'react-native'],
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      jsx: true,
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
  },
  rules: {
  },
};
