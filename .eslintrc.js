module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  ignorePatterns: [
    '**/*_pb.js',
    'src/lib/**/*.js',
    'src/server/**/*.js'
  ],
  extends: [
    'react-app',
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
