const { execSync } = require('child_process');
const allowedList = `${execSync('./scripts/print-allowed-dir.sh')}`.replace(/\n$/, '').split('\n');
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
    'jest-dom',
    'testing-library',
    'jsx-a11y',
    'deprecation',
    'import',
    'import-access',
  ],
  ignorePatterns: ['.eslintrc.js', 'vite.config.ts', 'vitest.setup.ts', 'squoosh.ts'],
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': [0],
    'react/jsx-props-no-spreading': [0],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*', '**/*.spec.*'],
        peerDependencies: true,
      },
    ],
    'no-underscore-dangle': [0],
    'deprecation/deprecation': 'error',
    'import-access/jsdoc': ['error'],
    'import/no-internal-modules': [
      'error',
      { allow: [...allowedList, 'msw/node', 'react-dom/client', 'swr/mutation', '@hookform/resolvers/zod'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
};
