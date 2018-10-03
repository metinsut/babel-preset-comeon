module.exports = (api, options) => {

	const {debug = true, shippedProposals = true, useBuiltIns = 'usage', spec = true} = options;
	
	return {
		presets: [
			[
				require('@babel/preset-env'),
				{
					modules: api.env('test') ? 'commonjs' : false,
					useBuiltIns,
					spec,
					debug,
					shippedProposals
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
