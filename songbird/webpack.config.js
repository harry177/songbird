let path = require ("path");


let conf = {
    entry: "./src/base/index.js",
    output: {
        path: path.resolve (__dirname, "./dist"),
        filename: "main.js",
        publicPath: "/dist/"
    },

    devServer: {
        static: [
            path.resolve(__dirname, "./src/base"),
            path.resolve(__dirname, "./src/game"),
            path.resolve(__dirname, "./src/results")
          ]
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
};

module.exports = conf;