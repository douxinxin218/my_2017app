let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve('build')
    },
    module: {
        rules: [
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(png|jpg|gif|svg)$/,use:'url-loader'}
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new htmlWebpackPlugin({
            template:'index.html'
        })
    ],
    devServer: {
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};