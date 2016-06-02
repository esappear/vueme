<template>
    <div class="container">
        <h1>Hello world!</h1>
        <todo></todo>
        <!--<p class="row">-->
            <!--<a v-link="'bar'" class="col-lg-4">Go to Bar</a>-->
            <!--<a v-link="'foo'" class="col-lg-4">Go to Foo</a>-->
            <!--<a v-link="'todo'" class="col-lg-4">Go to Todo</a>-->
        <!--</p>-->

        <!--<router-view></router-view>-->
    </div>
</template>
<style>

</style>
<script>
    import Todo from './components/todo.vue'


    //定义路由器所需的根组件
//    var App = {};

    //创建路由实例,定义路由规则
//    var router = new VueRouter();
//    router.map({
//        '/foo': {
//            name: 'foo',
//            component: Foo
//        },
//        '/bar': {
//            name: 'bar',
//            component: Bar
//        },
//        '/todo': {
//            name: 'todo',
//            component: Todo
//        }
//    });

    //启动路由
//    router.start(App, '#app');
//    export default{
//        data(){
//            return {
//                msg: 'hello vue'
//            }
//        },
//        components: {
//            Todo
//        }
//    }
    module.exports = {
        el: '#app',
        components: { Todo }
    }
</script>