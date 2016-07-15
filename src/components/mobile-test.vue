<template>
    <div>
        <!--<div class="circle">-->
            <!--<circle :percent="per" :stroke-width="5" :stroke-color="color1" :trail-width="5" >-->
            <!--</circle>-->
        <!--</div>-->
        <div class="circle" v-for="item in numbers" track-by="$index">
            <circle :percent="$index" :stroke-width="5" :trail-width="5">{{$index}}</circle>
        </div>
    </div>
</template>
<style>
    .circle {
        width: 100px;
        display: inline-block;
        margin: 10px;
    }
</style>
<script>
    import Circle from '../../node_modules/vux/src/components/Circle/index.vue'
    export default{
//        ready(){
//            setInterval(this.update, 100);
//        },
        data(){
            return{
                per: 0,
                numbers: new Array(101)
            }
        },
        components:{
            'circle':Circle
        },
        methods: {
            update(){
                this.per += 5;
            }
        }
    }
</script>