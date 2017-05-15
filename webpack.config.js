const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: ['./src/', 'webpack/hot/dev-server', 'webpack-hot-middleware/client'],
    output: {
        filename: 'index_bundle.js',
        path: path.resolve('dist'),
        publicPath: 'http://localhost:8080/dist/',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
    ]


}