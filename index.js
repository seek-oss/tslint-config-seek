module.exports = {
  extends: ['tslint:latest', 'tslint-config-prettier'],
  rules: {
    'interface-name': [true, 'never-prefix'],
    'member-access': false,
    'no-floating-promises': true,
    'no-implicit-dependencies': [true, 'dev'],
    'no-submodule-imports': false,
    'object-literal-sort-keys': false,
    'ordered-imports': false
  }
};
