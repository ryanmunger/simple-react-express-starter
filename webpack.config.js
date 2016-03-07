module.exports = {
    entry: [
        './public/scripts/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './public/bundle.js'
    },
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
