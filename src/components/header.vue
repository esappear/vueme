<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="glyphicon glyphicon-time"></i>
                {{msg}}
            </a>
            <ul class="nav navbar-nav">
                <li v-for="link in links"><a v-link="link.name">{{link.txt}}</a></li>
            </ul>
        </div>
    </nav>
</template>
<style>

</style>
<script>

    module.exports = {
        data: function (){
            return {
                msg: 'hello vue',
                links :[
                    {name: 'bar', txt: 'Go to Bar'},
                    {name: 'todo', txt: 'Go to Todo'}
                ]
            }
        }
    }
</script>