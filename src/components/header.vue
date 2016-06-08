<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="glyphicon glyphicon-time"></i>
                <span>{{msg}}</span>
            </a>
            <ul class="nav navbar-nav">
                <li v-for="link in links" :class="{'active':$route.path == link.name}"><a @click="goLink(link, $index)">{{link.txt}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<style lang="less">
    .navbar-brand span {
        color: #00b3ee;
        display: inline-block;
    }

    .navbar-nav li.active a {
        color: #00b3ee;
    }
</style>
<script>
    import Links from '../services/links'

    export default {
        data (){
            return {
                msg: 'Hello Vue',
                links: Links
            }
        },
        methods: {
            goLink: function (item, $index) {
                this.$dispatch('linkUpdate', {item: item, index: $index});
                this.$route.router.go(item.name);
            }
        }
    }
</script>