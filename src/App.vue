<template>
    <div>
        <header-component></header-component>
        <div class="container">
            <router-view :transition="slide"></router-view>
        </div>
    </div>
</template>
<style>
    .container {
        position: relative;
    }

    .fade-transition {
        transition: opacity .2s ease;
    }

    .fade-enter, .fade-leave {
        opacity: 0;
    }

    .slide-left-transition, .slide-right-transition {
        transition: all .5s ease;
        position: absolute;
        width: 100%;
    }

    .slide-left-transition {
        left: 0;
    }

    .slide-left-enter {
        margin-left: 100%;
        opacity: 0;
    }

    .slide-left-leave {
        margin-left: -100%;
        opacity: 0;
    }

    .slide-right-transition {
        right: 0;
    }

    .slide-right-enter {
        margin-right: 100%;
        opacity: 0;
    }

    .slide-right-leave {
        margin-right: -100%;
        opacity: 0;
    }
</style>
<script>
    import Header from './components/header.vue'
    import Links from './services/links'
    import qc from './services/common'
    export default {
        data (){
            return {
                msg: 'Hello Vue',
                slide: 'slide-right'
            }
        },
        components: {
            'header-component': Header
        },
        computed: {
            currentIndex: function () {
                return qc.getIndex(this.$route.path) || 0;
            }
        },
        events: {
            'linkUpdate': function (data) {
                this.slide = this.currentIndex > data.index ? 'slide-right' : 'slide-left';
            }
        }
    }
</script>