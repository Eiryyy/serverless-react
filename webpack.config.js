module.exports = {
    entry: './client/src/index.jsx',

    output: {
        path: './client/dist',
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [ /node_modules/, /functions/ ],
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
