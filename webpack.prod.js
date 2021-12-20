const path = require('path');
const common = require('./webpack.common')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge.merge(common, {
	mode: "production",
	entry: './src/index.ts',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public'),
	},
});
