var webpack = require('webpack');

var plugins = [
    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: '"production"'}
    })
];

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
                exclude: 'node_modules',
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.jsx']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-element-to-jsx-string': 'react-element-to-jsx-string'
    },
    plugins: plugins
};
