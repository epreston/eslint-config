import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    name: 'epreston/shared/ignores',
    ignores: ['**/dist', '**/public', '**/coverage', 'notes', 'meta'],
  },
  js.configs.recommended,
  {
    name: "epreston/shared/rules",
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      '@stylistic/js': stylisticJs
    },

    rules: {
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],

      eqeqeq: ['error', 'smart'],

      '@stylistic/js/semi': 'error',
      '@stylistic/js/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      '@stylistic/js/quote-props': ['error', 'consistent-as-needed'],

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
