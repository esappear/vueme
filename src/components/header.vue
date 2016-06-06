<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="glyphicon glyphicon-time"></i>
                <span>{{msg}}</span>
            </a>
            <ul class="nav navbar-nav">
                <li v-for="link in links"><a v-link="link.name">{{link.txt}}</a></li>
            </ul>
        </div>
    </nav>
</template>
<style lang="less">
    .navbar-brand {
        span {
            color: #00b3ee;
            display: inline-block;
        }
    }
</style>
<script>

    export default {
        data (){
            return {
                msg: 'Hello Vue',
                links :[
                    {name: 'time-entries', txt: 'Go to TimeEntries'},
                    {name: 'todo', txt: 'Go to Todo'}
                ]
            }
        }
    }
</script>