/**
 * Created by qingcheng on 16/5/24.
 */
// var path = require('path')
// var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: './src/app.js',
    output: {
        path: './static/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            // },
            // {
            //     test: /\.js$/,
            //     loader: 'babel',
            //     include: projectRoot,
            //     exclude: /node_modules/
            }
        ]
    }
};