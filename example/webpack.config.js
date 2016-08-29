var path = require('path');

module.exports = {
    entry: [
        "./index.jsx"
    ],
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
    output: {
        path: path.resolve(__dirname, '.'),
        publicPath: "/",
        filename: 'bundle.js'
    }
};
