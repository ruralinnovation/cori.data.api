module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    ecmaVersion: 'es2020',
    sourceType: 'module',
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/react"]
    }
  },
  plugins: ['@typescript-eslint', 'prettier', 'react-refresh'],
  rules: {
    // base eslint rules
    'curly': 'error',
    'indent': 'off',
    'semi': ['error', 'always'],
    'no-cond-assign': ['error', 'always'],
    'init-declarations': 'off',
    'no-console': 'off', // you should use the Logger to avoid this
    'eqeqeq': 'error',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    'require-atomic-updates': 'error',
    'array-callback-return': 'error',
    'no-prototype-builtins': 'off',
    'require-await': 'error',
    'no-var': 'error',

    // eslint & typescript-eslint rule pairs
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    'no-use-before-define': 'error',
    '@typescript-eslint/no-use-before-define': 'error',

    // typescript-eslint rules
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn', // turning this off removes type safety. use an if(){} to check for the null
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { checksConditionals: true, checksVoidReturn: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/first': 'error',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  }
};
