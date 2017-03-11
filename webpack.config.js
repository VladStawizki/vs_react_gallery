const ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        gallery: './gallery.js'
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: [/node_modues/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                    }
                }]
            },
            {
                test: /\.(sass|scss)$/,
                exclude: [/node_modues/],
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: '[name].bundle.js',
        publicPath: '/assets'
    },

    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css'
        })
    ]
}