# ff-lint-config
fe-flow lint config

⭐️ generated by [ff-node-package-starter](https://github.com/ayo4code/ff-node-package-starter)

## Install
```bash
npm i -D ff-lint-config
```
## Usage
eslint react
```js
// .eslintrc.js
module.exports = {
  extends: [require.resolve('ff-lint-config/eslint-config-react')],
  rules: {
    // your rules
  }
}
```

eslint node
```js
// .eslintrc.js
module.exports = {
  extends: [require.resolve('ff-lint-config/eslint-config-ts')],
  rules: {
    // your rules
  }
}
```

prettier
```js
// .prettierrc.js
module.exports = {
  ...require('ff-lint-config/prettier'),
  // your rules
}
```