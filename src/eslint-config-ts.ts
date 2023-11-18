import { baseRules } from './rules/base.rule'
import { tsRules } from './rules/ts.rule'
import { importRules } from './rules/import.rule'

module.exports = {
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    ...baseRules,
    ...tsRules,
    ...importRules,
  },
}
