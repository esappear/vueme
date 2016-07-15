/**
 * Created by qingcheng on 16/6/2.
 */
var gulp = require('gulp')
var webpack = require('gulp-webpack')
var named = require('vinyl-named')


var appList = ['app']


gulp.task('default', ['bundle'], function () {
    console.log('done')
})

gulp.task('bundle', function () {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig()))
        .pipe(gulp.dest('dist/'))
})

gulp.task('watch', function () {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig({watch: true})))
        .pipe(gulp.dest('dist/'))
})

/**
 * @private
 */
function getConfig(opt) {
    var config = {
        output: {
            //公共资源的获取路径,包括懒加载生成的文件
            publicPath: 'dist/'
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: 'vue'},
                {test: /\.less$/, loader: "style!css!less"}
            ]
        },
        devtool: 'source-map'
    }
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
    return list.map(function (app) {
        return 'src/' + app + '.' + extname
    })
}