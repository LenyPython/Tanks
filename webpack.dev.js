const path = require('path');
const common = require('./webpack.common')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge.merge(common, {
	mode: "development",
	devServer: {
		port: 3000,
	}
});
