<template>
    <!--html5有默认的header,直接header组件会失效-->
    <header-component></header-component>
    <div class="container">
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    import Header from './components/header.vue'
    export default {
        data (){
            return {
                msg: 'Hello Vue'
            }
        },
        components: {
            'header-component': Header
        }
    }
</script>