module.exports = (api, options) => {
	return {
		presets: [
			[
				require('@babel/preset-env'),
				{
					modules: api.env('test') ? 'commonjs' : false,
					useBuiltIns: options.useBuiltIns || 'usage',
					spec: true,
					debug: options.debug || true,
					shippedProposals: true
				}
			],
			require('@babel/preset-react')
		].filter(Boolean),
		plugins: [
			require('@babel/plugin-proposal-class-properties'),
			require('@babel/plugin-proposal-json-strings'),
			require('@babel/plugin-syntax-dynamic-import'),
			require('@babel/plugin-syntax-import-meta'),
			require('react-hot-loader/babel'),
			(api.env('test') || options.node) && require('babel-plugin-dynamic-import-node')
		].filter(Boolean)
	}
};
