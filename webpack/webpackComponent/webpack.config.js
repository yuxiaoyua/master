var webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[id][name][hash].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.png|.jpg$/,
                loader: "url-loader"
            }
        ]
    },
    devServer: {
        contentBase: __dirname + "/dist",
        port: 9001,
        host: "localhost",
        hot: true,
        watchContentBase: true,
        compress: true
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}