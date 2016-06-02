/**
 * Created by qingcheng on 16/5/24.
 */
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
            }]
    }
};