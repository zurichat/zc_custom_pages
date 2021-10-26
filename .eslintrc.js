module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
