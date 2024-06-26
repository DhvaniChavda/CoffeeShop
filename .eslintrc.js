module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    // This to avoid an error from flow types with prefix `_t_`
    camelcase: 0,
    // This to avoid an error that all files with jsx must be with extension `jsx`
    'react/jsx-filename-extension': 0,
    // Avoid error when defined flow types for props at the top of the class
    'react/sort-comp': 0,
    // Disable error: absolute imports should come before relative imports.
    'import/first': 0,
    // Disable error: do not import modules using an absolute path
    'import/no-absolute-path': 0,
    // Allow imports without extensions
    'import/extensions': 0,
    // Change error to warning for: prefer default export (when export one item
    // from file - prefer to use `default export` instead of `export`)
    'import/prefer-default-export': 0,
    // disallow trailing commas in object literals
    'comma-dangle': 0,
    // Disable rule: strings must use doublequotes.
    quotes: [2, 'double', {allowTemplateLiterals: true}],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    // Allow to start name of variables and functions from underscore
    'no-underscore-dangle': 0,
    // Maximum line length
    'max-len': ['warn', 120],
    // Disable rule: expected the Promise rejection reason to be an Error.
    // It not allow explicitly return promise reject without error provided
    'max-lines': ['warn', 300],
    'prefer-promise-reject-errors': 0,
    // TODO: find solution for resolve paths for import
    // For now disable error: unable to resolve path to module
    // It be handled by flow
    'import/no-unresolved': 0,
    // Allows first line in block to be empty
    'padded-blocks': 0,
    // Allow use unary operators
    'no-plusplus': 0,
    // Allow to use hasOwnProperty
    'no-prototype-builtin': 0,

    // Disable import order check because have our own code style requirements
    'import/order': 0,

    // Allow to not define default props for not required props
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0,

    // allow spacing after closing `>`
    'react/jsx-tag-spacing': 0,

    'react/jsx-curly-newline': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,

    // Don't allow set state with object
    'react/no-access-state-in-setstate': 2,

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // allow just one var statement per function
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
