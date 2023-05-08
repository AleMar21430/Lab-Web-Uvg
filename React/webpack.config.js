const path = require("path");

module.exports = {
	entry: {
		"index": "./src/index.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude:/node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public")
	},
};