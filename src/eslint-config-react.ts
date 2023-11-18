import { baseRules } from './rules/base.rule'
import { tsRules } from './rules/ts.rule'
import { importRules } from './rules/import.rule'
import { reactRules } from './rules/react.rule'

module.exports = {
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
  rules: {
    ...baseRules,
    ...tsRules,
    ...importRules,
    ...reactRules,
  },
}
