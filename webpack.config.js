
var settings = require('./appSettings');
var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// settings.debug = process.env.NODE_ENV !== "production";

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
				test: /\.scss$/, use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{ test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader?name=./Scripts/dist/[name].[ext]' }
		]
	},
	stats: {
		colors: true
	},

	externals: {
		jquery: 'jQuery',
		ck_currency: 'ck_currency'
	},

	devtool: settings.debug  ? "source-map" : "",
	mode: settings.debug  ? "development" : "production",
	watch: !!settings.debug ,
	optimization:{
		minimize: !settings.debug
    },
	plugins: [
		new ExtractTextPlugin("[name]_styles.css"),
	],
};