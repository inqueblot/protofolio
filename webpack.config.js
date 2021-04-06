const path = require("path");

module.exports = {
    entry: "./App.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};