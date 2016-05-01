var path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        bar: './bar'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loaders: ['babel?presets[]=es2015&presets[]=react']
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loaders: ['file']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                loaders: ['file']
            }
        ]
    }
};
