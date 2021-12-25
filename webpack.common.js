const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		main: path.resolve(__dirname, 'src/index.ts')
	},
	module: {
		rules: [
			{
				test: /(\.ts|\.tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	}
};
