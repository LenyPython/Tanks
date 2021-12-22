const path = require('path');
const common = require('./webpack.common')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge.merge(common, {
	mode: "development",
	entry: './src/index.ts',
	devServer: {
		port: 3000,
	}
});
