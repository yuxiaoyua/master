module.exports = {
    entry: {
        main: "./src/index.js",
        app: "./src/app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        // chunkFilename:""
    }
}