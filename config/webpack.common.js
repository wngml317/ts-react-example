const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin =  require("copy-webpack-plugin");
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
            // {
            //     test: /\.(jpg|png|gif|svg)$/,
            //     use: ["file-loader"],
            // },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'], 
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource'
            }
        ],
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "bundle.js",
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html"
        }),
        new CopyPlugin({ patterns: [{ from: 'public/images', to: 'images/' }] }),
    ],
};