import { baseRules } from './base.rule'
import { tsRules } from './ts.rule'
import { reactRules } from './react.rule'
import { importRules } from "./import.rule"

export default {
  // env: {
  //   browser: true,
  //   es6: true,
  //   node: true,
  // },
  // extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint', "import"],
  rules: {
    'indent': [
      'error',
      'tab'
    ],
    // ...baseRules,
    // ...tsRules,
    // ...importRules
  }
}



// export const reactEslintConfig = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//   },
//   extends: ['prettier', 'plugin:react/recommended'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
//   rules: {
//     ...baseRules,
//     ...tsRules,
//     ...importRules,
//     ...reactRules
//   }
// }