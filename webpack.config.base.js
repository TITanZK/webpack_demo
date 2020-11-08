const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'FH - 芳华',
            template: "src/assets/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                // loader: ['style-loader', 'css-loader', 'less-loader'],
                use: [
                    {
                        loader: 'style-loader', // 从 JS 中创建样式节点
                    },
                    {
                        loader: 'css-loader', // 转化 CSS 为 CommonJS
                    },
                    {
                        loader: 'less-loader', // 编译 Less 为 CSS
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
}