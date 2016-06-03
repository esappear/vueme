<template>
    <div class="container">
        <h1>{{msg}}</h1>
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
    module.exports = {
        data: function () {
            return {
                msg: 'Hello Vue'
            }
        }
    };
</script>