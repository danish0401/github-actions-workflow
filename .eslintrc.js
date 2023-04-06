/** allowed imports (with public API) */
const ALLOWED_PATH_GROUPS = ['shared', 'shared/**', 'pages', 'features', 'models'].map((pattern) => ({
  pattern,
  group: 'internal',
  position: 'after',
}));
/** denied import paths */
const DENIED_PATH_GROUPS = [
  // Prefer absolute imports, instead of relatives (for root modules)
  '../**/app',
  '../**/pages',
  '../**/features',
  '../**/shared',
  '../**/models',

  // Mui patterns
  '@mui/*/*/*',
  '!@mui/material/test-utils/*',
];

module.exports = {
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
  },
  extends: [
    // Uses the recommended rules from @eslint-plugin-react
    'standard',
    'plugin:react/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'react-hooks', '@typescript-eslint'],
  rules: {
    // imports
    'import/first': 2,
    'import/no-unresolved': 0,
    'import/order': [
      2,
      {
        pathGroups: ALLOWED_PATH_GROUPS,
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    // TODO: specify message: ("Please use allowed public API (not private imports!)")
    'no-restricted-imports': [2, { patterns: DENIED_PATH_GROUPS }],

    // alert, console
    'no-alert': 2,
    'no-console': 0,

    // react
    'react/prop-types': 'warn',
    'react/no-unused-prop-types': 'error',
    'react/require-default-props': 'warn',
    // Check rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',
    'no-confusing-arrow': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'linebreak-style': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.tsx', '.ts'],
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': [2, 'always-multiline'],
    'quote-props': ['warn', 'as-needed'],
    'object-shorthand': 'warn',
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
  },
};
