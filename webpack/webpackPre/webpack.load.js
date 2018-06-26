var webpack = require("webpack")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ComponentPlugin = require("component-webpack-plugin");
module.exports = {
    entry: {
        main: "./load/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "js/[name][hash].js", //name为模块的名字，hash加入hash值，防止缓存，使用此属性是，模块的引入必须结合require.ensure方法，否则此方法无效；
        // publicPath: ""
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: true
                        // }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                // query: {
                //     minimize: true
                // }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
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
            // "/": "http://localhost:3000/"
            "/api": {
                target: "http://localhost:8000",
                pathRewrite: { "^/api": "" },
                secure: false
            }
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
            filename: "commons.js",
            // ( 公共chunk 的文件名)
        })
    ]
}