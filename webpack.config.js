module.exports = {
    entry: [
        './public/scripts/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './public/bundle.js',
        sourceMapFilename: './public/bundle.map'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
