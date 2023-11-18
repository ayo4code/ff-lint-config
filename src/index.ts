import { baseRules } from './rules/base.rule'
import { tsRules } from './rules/ts.rule'
import { reactRules } from './rules/react.rule'
import { importRules } from './rules/import.rule'

const reactEslintConfig = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  rules: {
    ...baseRules,
    ...tsRules,
    ...importRules,
    ...reactRules,
  },
}

const tsEslintConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    ...baseRules,
    ...tsRules,
    ...importRules,
  },
}

module.exports = {
  config: {
    'ts-react': reactEslintConfig,
    ts: tsEslintConfig,
  },
}
