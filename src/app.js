/**
 * Created by qingcheng on 16/5/24.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var VueForm = require('vue-form');
var Mint = require('mint-ui');
// var Todo = require('./components/todo.vue');
// var TimeEntries = require('./components/time-entries.vue');
// var LogTime = require('./components/log-time.vue');
// var MobileTest = require('./components/mobile-test.vue');
var App = require('./App.vue');

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueForm);
Vue.use(Mint);

//创建路由实例,定义路由规则
var router = new VueRouter();
router.map({
    '/time-entries': {
        component: function (resolve) {
            require(['./components/time-entries.vue'], resolve);
        },
        subRoutes: {
            '/log-time': {
                component: function (resolve) {
                    require(['./components/log-time.vue'], resolve)
                }
            }
        }
    },
    '/todo': {
        component: function (resolve) {
            require(['./components/todo.vue'], resolve);
        }
    },
    '/mobile': {
        component: function (resolve) {
            require(['./components/mobile-test.vue'], resolve);
        }
    }
});

router.redirect({
    '*': '/todo'
});


router.start(App, '#app');

