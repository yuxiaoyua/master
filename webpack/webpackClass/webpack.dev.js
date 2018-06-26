const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
module.exports = {
    entry: {
        main: "./src/index.js",
        // app: "./src/app.js",
        // app1: "./src/app1.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
        inline: true,
        watchContentBase: true,
        host: 'localhost',
        setup: function(app) {
            app.get('/some/path', function(req, res) {
                console.log(11)
                res.json({ custom: 'response' });
            });
        },
        proxy: {
            // "/api": "http://localhost:3000/"
            // "/": "http://192.168.1.123:3000/"
            "/": {
                target: "http://localhost:8000/",
                // pathRewrite: { "^/api": "" },
                secure: false
            }
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                // loader: "babel-loader",
                // options: {
                //     presets: [
                //         "es2015"
                //     ],
                //     plugins:[]
                // },
                use: [
                    "babel-loader",
                    // "eslint-loader"
                    // {
                    //     loader: "eslint-loader",
                    //     options: {
                    //         "rules": {
                    //             "quotes": [
                    //                 1,
                    //                 // "single"
                    //                 "double"
                    //             ]
                    //         }
                    //     }
                    // },

                ]
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
                use: [
                    "html-loader",
                ]
            },
            {
                test: /\.png|.jpg$/,
                loader: "url-loader",
                // options: {

                // }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
            filename: "commons.js",
            // ( 公共chunk 的文件名)
        }),
        new HtmlWebpackPlugin({
            // filename: 'test.html',
            template: "./index.html"
        })
    ]
}