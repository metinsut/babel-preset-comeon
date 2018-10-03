module.exports = (api, options = {env: {}, presets: [], plugins: []}) => {
	return {
		presets: [
			[
				require('@babel/preset-env'),
				{
					modules: api.env('test') ? 'commonjs' : false,
					useBuiltIns: 'usage',
					spec: true,
					debug: true,
					shippedProposals: true,
					...options.env
				}
			],
			require('@babel/preset-react'),
			...options.presets
		].filter(Boolean),
		plugins: [
			require('@babel/plugin-proposal-class-properties'),
			require('@babel/plugin-proposal-json-strings'),
			require('@babel/plugin-syntax-dynamic-import'),
			require('@babel/plugin-syntax-import-meta'),
			require('react-hot-loader/babel'),
			(api.env('test') || options.env.targets.node) && require('babel-plugin-dynamic-import-node'),
			...options.plugins
		].filter(Boolean)
	}
};
