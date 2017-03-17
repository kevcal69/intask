var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        path: path.resolve('./assets/js/'),
        filename: 'render.min.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
            }
        }]
    },

    resolve: {
        modules: ['node_modules', 'src/modules'],
        extensions: ['.js', '.jsx']
    }
}
