const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-cheap-source-map",
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,   //react-router 사용 시 설정해 놓은 url 이외의 경로로 접속했을 때에도 index.html을 제공할지 결정하는 옵션 (새로고침 시 발생하는 에러 해결)
        proxy: {
            "/api": {
                target: `http://localhost:${PORT}`,
                changeOrigin: true,
            }
        },
        
    },
});