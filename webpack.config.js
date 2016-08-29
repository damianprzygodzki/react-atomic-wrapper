var webpack = require('webpack');

module.exports = {
    entry: ['./AtomicWrapper.jsx'],
    output: {
        path: __dirname + '/dist/',
        filename: 'AtomicWrapper.js',
        library: 'AtomicWrapper',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
