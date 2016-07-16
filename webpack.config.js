/**
 * Created by qingcheng on 16/5/24.
 */
var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
       app: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: './static/js',
        //公共资源的获取路径,包括懒加载生成的文件
        publicPath: '/static/js/',
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
            },
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    }
};