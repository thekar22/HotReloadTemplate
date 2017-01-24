var path = require("path");
module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }, 

  module: {
		loaders: [
		{
			test: /\.html$/,
			loader: "raw-loader"
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},
		{
			test: /\.sass$/,
			loader: "style-loader!css-loader!sass-loader"
		},
		]
	},
	devServer: { inline: true }
};