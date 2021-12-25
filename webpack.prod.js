const path = require('path');
const common = require('./webpack.common')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge.merge(common, {
	mode: "production",
	entry: {
		main: path.resolve(__dirname, 'src/index.ts')
	},
	output: {
		filename: 'TankPewPew.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin({
		title: "Tanks Pew Pew",
		filename: "index.html",
		template: path.resolve(__dirname, 'src/template.html')
	}),
	]
});
