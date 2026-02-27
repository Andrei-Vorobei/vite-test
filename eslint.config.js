// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import cssModulesPlugin from 'eslint-plugin-css-modules';
import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
const config = [
  { ignores: ['*.config.*', 'dist', 'node_modules', 'package*.json', 'public', 'src/stories/'] },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      perfectionist, 
      react,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      'css-modules': cssModulesPlugin,
    },
    rules: {
      'no-unused-vars': 'off',
      'css-modules/no-undef-class': 'error',   // Ошибка при несуществующих классах
      'css-modules/no-unused-class': 'warn',   // Предупреждение о неиспользуемых классах
      'import/no-unresolved': ["error", { "commonjs": true, "amd": true }],
      'import/no-unused-modules': 'error',
      'import/order': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          newlinesBetween: 1,
          groups: [
            'type-import',
            ['value-builtin', 'value-external'],
            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'ts-equals-import',
            'unknown'
          ]
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [
            ['', './public'],
            ['@', './src'],
            ['@components', './src/components'],
            ['@contexts', './src/contexts'],
            ['@hoc/', './src/hoc'],
            ['@hooks', './src/hooks'],
            ['@pages', './src/pages'],
            ['@services', './src/services'],
            ['@utils', './src/utils'],
          ],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
        },
        'css-modules': {
          camelCase: 'true',
          filetypes: {
            '.css': 'postcss',
            '.module.css': 'postcss'
          },
        },
      },
    },
  },
  eslintPluginPrettierRecommended,
  ...storybook.configs["flat/recommended"]
];

export default config; 