module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'no-unused-vars': ["error", { "caughtErrors": "none" }],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    'max-len': ["error", { "code": 1000000 }],
},
};
