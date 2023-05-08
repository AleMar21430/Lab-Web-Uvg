﻿module.exports = {
	entry: {
		"index": "./src/index.js",
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "/public")
	},
};