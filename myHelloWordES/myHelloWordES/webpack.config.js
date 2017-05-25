module.exports = {
    entry: {
      a:  './Controller/Base1.js',
      b: './Controller/Register.js'
    },
    output: {
        //path: path.join(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};