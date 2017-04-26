var path = require('path');

var entryPath = path.join(__dirname, 'src');
var outPath = path.join(__dirname, 'dist');

module.exports = {
    context: entryPath,
    entry: './index.js',
    output: {
        path: outPath,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] },
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss)$/, //Check for sass or scss file names
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    devServer: {
        contentBase: outPath
    }
}