var webpack = require("webpack")
var path = require("path")
var config = require("./webpack.load.js")
var WebpackDevServer = require("webpack-dev-server")

const compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    watchContentBase: true,
    inline: true,
    host: 'localhost',
    stats: {
        colors: true
    }
});
server.listen(8080, "localhost", function() {
    console.log("Starting server on http://localhost:8080");
});