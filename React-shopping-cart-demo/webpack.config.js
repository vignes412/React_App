
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
template: __dirname + '/src/index.html',
filename: 'index.html',
inject: 'body'
})

module.exports = {
entry: [
'./src/main.js'
],
output: {
path: __dirname + '/release',
filename: "index_bundle.js"
},
devServer : {
	port : 8086
},
module: {
loaders: [
{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
]
},
plugins: [HtmlWebpackPluginConfig]
}
