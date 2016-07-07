/**
 * Created by qingcheng on 16/5/24.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var Todo = require('./components/todo.vue');
var TimeEntries = require('./components/time-entries.vue');
var LogTime = require('./components/log-time.vue');
var MobileTest = require('./components/mobile-test.vue');
var App = require('./App.vue');

Vue.use(VueRouter);
Vue.use(VueResource);

//创建路由实例,定义路由规则
var router = new VueRouter();
router.map({
    '/time-entries': {
        component: TimeEntries,
        subRoutes: {
            '/log-time': {
                component: LogTime
            }
        }
    },
    '/todo': {
        component: Todo
    },
    '/mobile': {
        component: MobileTest
    }
});

router.redirect({
    '*': '/todo'
});


router.start(App, '#app');

