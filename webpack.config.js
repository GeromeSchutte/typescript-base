const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const enableModuleOutput = {
    library: 'typescriptBase',
    libraryTarget: 'umd',
}

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        ...enableModuleOutput,
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new ForkTsCheckerWebpackPlugin(), new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')})]
};