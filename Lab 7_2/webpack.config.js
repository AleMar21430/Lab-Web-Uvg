const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");

module.exports = {
	entry: {
		"index": "./src/index.js",
		"pages/story": "./src/pages/story.js",
		"pages/chapter1": "./src/pages/chapter1.js",
		"pages/chapter2": "./src/pages/chapter2.js",
		"pages/popular": "./src/pages/popular.js",
		"pages/newreleases": "./src/pages/newreleases.js",
	},
	output: {
		path: path.resolve(__dirname, "output_babel"),
		filename: "[name].bundle.js"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles.css",
			chunkFilename: "styles.css"
		}),
		new HtmlWebpackPlugin({
			title: "Lab 7",
			filename: "index.html",
			chunks: ["index"]
		}),
		new HtmlWebpackPlugin({
			title: "Lab 7",
			filename: "pages/story.html",
			chunks: ["pages/story"]
		}),
		new HtmlWebpackPlugin({
			title: "Lab 7",
			filename: "pages/popular.html",
			chunks: ["pages/popular"]
		}),
		new HtmlWebpackPlugin({
			title: "Lab 7",
			filename: "pages/newreleases.html",
			chunks: ["pages/newreleases"]
		}),
		new HtmlWebpackPlugin({
			title: "Lab 7",
			filename: "pages/chapter1.html",
			chunks: ["pages/chapter1"]
		}),
		new HtmlWebpackPlugin({
			title: "Lab 7",
			filename: "pages/chapter2.html",
			chunks: ["pages/chapter2"]
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude:/node_modules/,
				use: "babel-loader",
				test: /\.(sa|sc|c)ss$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"},
				],
			},
		],
	},
};