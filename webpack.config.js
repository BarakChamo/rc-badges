var path = require('path'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		webpack = require('webpack')

module.exports = {
	name: 'app',

	entry: {
		app: ['./app/index.jsx']
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: '[name].js'
	},

	module: {
		loaders: [
			// Babel loader
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel?optional[]=runtime&stage=0'
			},
			{
				test: /\.tag.less$/,
				loader: 'css!autoprefixer!less'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!autoprefixer!sass'
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline'
			},
			{
				test: /\.woff2$/,
				loader: 'file'
			}
		]
	},

	resolve: {
		modulesDirectories: [
			'node_modules',
			'resources',
			'app'
		],

		extensions: ['.js', '.json', '.jsx', '']
	}
}