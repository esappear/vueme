/**
 * Created by qingcheng on 16/5/24.
 */
// var Vue = require('vue');
// var VueRouter = require('vue-router');
var Todo = require('./components/todo.vue');
var Bar = require('./components/bar.vue');

Vue.use(VueRouter);

//创建路由实例,定义路由规则
var router = new VueRouter();
router.map({
    '/bar': {
        name: 'bar',
        component: Bar
    },
    '/todo': {
        name: 'todo',
        component: Todo
    }
});

var App = {};

router.start(App, '#app');

