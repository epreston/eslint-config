import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['**/dist', '**/public', '**/coverage', 'notes', 'meta'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 2022,
      sourceType: 'module',
    },

    rules: {
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],

      eqeqeq: ['error', 'smart'],
      semi: 'error',

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      'quote-props': ['error', 'consistent-as-needed'],

      'no-throw-literal': ['error'],

      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'no-unused-vars': 'off',

      'no-duplicate-imports': 'warn',
      'no-new-native-nonconstructor': 'error',

      yoda: ['error', 'never', { exceptRange: true }],

      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  },
  eslintConfigPrettier,
];
