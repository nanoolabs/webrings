export default {
  files: ['src/**/*.css'],
  extends: ['stylelint-config-standard'],
  rules: {
    // bare string imports are resolved by the bundler, not the browser
    'import-notation': null,
  },
}
