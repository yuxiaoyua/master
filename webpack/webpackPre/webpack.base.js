var webpack = require("webpack")
module.exports = {
    // entry: "./base/index.js",
    // entry: {
    //     main: "./base/index.js"
    // },
    entry: {
        app: "./base/index.js",
        common: "./base/common.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name][hash].js"
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new HtmlWebpackPlugin({ template: './src/index.html' })
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
            filename: "commons.js",
            // ( 公共chunk 的文件名)
        })
    ]
}