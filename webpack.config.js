var path = require('path'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		webpack = require('webpack')

module.exports = [{
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
				exclude: path.resolve(__dirname, 'node_modules'),
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
}, {
	name: 'lib',

	entry: {
		lib: ['./lib/index.jsx']
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: '[name].js',
		library:  'RC'
	},

	module: {
		loaders: [
			// Babel loader
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, 'node_modules'),
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
},
{
	name: 'test',

	entry: {
		test: ['./test/index.jsx']
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
				exclude: path.resolve(__dirname, 'node_modules'),
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
}]