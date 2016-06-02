<template>
    <div id="router" class="container">
        <h1>Hello world!</h1>
        <p class="row">
            <a v-link="'bar'" class="col-lg-6">Go to Bar</a>
            <a v-link="'todo'" class="col-lg-6">Go to Todo</a>
        </p>

        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    import Todo from './components/todo.vue'
    import Bar from './components/bar.vue'

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

    module.exports = router;
</script>