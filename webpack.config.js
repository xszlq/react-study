/**
 * Created by zhaozl on 2016-09-26.
 */
module.exports = {
    entry: './es6/main.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.html$/, loader: 'html'
            }
        ]
    }
};
