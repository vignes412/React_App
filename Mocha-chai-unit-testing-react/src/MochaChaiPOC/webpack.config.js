/// <binding AfterBuild='Watch - Development' />
//Webpack - to bundle, compress & minification
"use strict";

var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        "my-leads": path.join(__dirname, 'wwwroot/js/', 'App.jsx')
    },
    output: {
        path: path.join(__dirname, 'wwwroot/js', 'release'),
        filename:  "[name].min.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css', '.png', '.jpg'],
        moduleDirectories: ['node_modules']
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: false,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
        {
            test: /\.(js|jsx)?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react']
            }
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    }
};