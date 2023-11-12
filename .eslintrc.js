module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	// 'extends': [require.resolve('./dist')],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	"rules": {
		'indent': [
			'error',
			'tab'
		],
	}
	// 'rules': {
	// 	'indent': [
	// 		'error',
	// 		'tab'
	// 	],
	// 	'linebreak-style': [
	// 		'error',
	// 		'unix'
	// 	],
	// 	'quotes': [
	// 		'error',
	// 		'single'
	// 	],
	// 	'semi': [
	// 		'error',
	// 		'always'
	// 	]
	// }
};
