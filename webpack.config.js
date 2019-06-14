var path =require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: [
        "./reactjs/app.jsx"
    ],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: "app.js"
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],      
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
             {
                 test:/\.(s*)css$/,
                 use:[
                  MiniCssExtractPlugin.loader,                 
                  'css-loader', 'sass-loader'
                 ]
              }          
        ]
    },     
    resolve : {
        alias : {
            src : path.resolve(__dirname,'reactjs')
        },
        extensions: [".js", ".jsx"]
    }        
};