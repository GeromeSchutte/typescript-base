const path = require('path');

const enableModuleOutput = {
    library: 'typescriptBase',
    libraryTarget: 'umd',
}

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        ...enableModuleOutput,
        path: path.resolve(__dirname, 'dist'),
    },
};