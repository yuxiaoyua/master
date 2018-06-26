var webpack = require("webpack")
module.exports = {
    entry: {
        main: "./boundjs/index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "js/[name][hash].js", //name为模块的名字，hash加入hash值，防止缓存，使用此属性是，模块的引入必须结合require.ensure方法，否则此方法无效；
        // publicPath: "/dist/"  

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