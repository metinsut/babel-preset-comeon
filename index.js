module.exports = {
	presets: [
		[
			require('babel-preset-env'),
			{
				modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false, // Jest makes me do this
				useBuiltIns: true,
				loose: true
			}
		],
		require('babel-preset-react')
	],
	plugins: [
		require('babel-plugin-syntax-async-functions'),
		require('babel-plugin-transform-regenerator'),
		require('babel-plugin-syntax-dynamic-import'),
		require('babel-plugin-transform-object-rest-spread'),
		require('babel-plugin-external-helpers'),
		require('babel-plugin-transform-regenerator'),
		[require('babel-plugin-transform-class-properties'), { spec: true }]
	]
};
