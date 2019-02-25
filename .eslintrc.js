const path = require('path');
const getAliases = require('./scripts/aliases')
const alias = getAliases(__dirname)

module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  extends: ['airbnb'],
  rules: {
    'camelcase': [0],
    'quote-props': [2, 'consistent-as-needed'],
    'no-restricted-globals': [0],
    'no-restricted-properties': [0],
    'no-confusing-arrow': [0],
    'implicit-arrow-linebreak': [0],
    'jsx-a11y/no-autofocus': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'react/jsx-filename-extension': [0],
    'react/prefer-stateless-function': [0],
    'react/require-default-props': [0],
    'react/no-array-index-key': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-marquee': [0],
    'jsx-a11y/href-no-hash': [0],
    'react/react-in-jsx-scope': [0],
    'react/destructuring-assignment': [0],
    'react/no-access-state-in-setstate': [0],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-wrap-multilines': [
      2,
      {
        assignment: false,
        arrow: false,
        return: false,
        declaration: false,
      },
    ],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'static-methods',
          'unsafe',
          'lifecycle',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'fetchers',
          'instance-methods',
          'bindings',
          'everything-else',
          'instance-variables',
          'rendering'
        ],
        groups: {
          rendering: ['/^render.+$/', 'render'],
          bindings: ['/^on.+$/', '/^handle.+$/'],
          fetchers: ['/^fetch.+$/', '/^start.+$/'],
          unsafe: ['/^UNSAFE.+$'],
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'statics',
            'defaultProps',
            'state',
            'constructor',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
        },
      },
    ],
    'import/extensions': [2, { js: 'never' }],
    'import/no-named-default': [0],
    'comma-dangle': [2, 'always-multiline'],
    'max-len': [2, 120, { ignoreComments: true, ignoreUrls: true, }],
    'semi': [2, 'never'],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias,
          },
        },
      },
    },
  },
};
