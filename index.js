module.exports = (api, {env={}, ...options}) => {
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
					...env
				}
			],
			require('@babel/preset-react'),
			api.env('production') && require('babel-preset-minify')
		].filter(Boolean),
		plugins: [
			require('@babel/plugin-proposal-class-properties'),
			require('@babel/plugin-proposal-json-strings'),
			require('@babel/plugin-syntax-dynamic-import'),
			require('@babel/plugin-syntax-import-meta'),
			(api.env('test') || options.targets.node) && require('babel-plugin-dynamic-import-node')
		].filter(Boolean),
		...options
	}
};
