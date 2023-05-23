const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: ["file-loader"],
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'], 
            }
        ],
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "bundle.js",
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html"
        }),
    ],
};