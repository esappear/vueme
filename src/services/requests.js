/**
 * Created by qingcheng on 16/7/6.
 */
var Vue = require('vue');
var VueResource = require('vue-resource');
var requests = {};

Vue.use(VueResource);

requests.todoReq = Vue.resource('/api/todo');

module.exports = requests