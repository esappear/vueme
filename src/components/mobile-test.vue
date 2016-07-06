<template>
    <div>
        <div class="circle">
            <circle :percent="per" :stroke-width="5" :stroke-color="color1" :trail-width="5" >
            </circle>
        </div>
    </div>
</template>
<style>
    .circle {
        width: 300px;
        margin: 0 auto;
    }
</style>
<script>
    import Circle from '../../node_modules/vux/src/components/Circle/index.vue'
    export default{
        ready(){
            setInterval(this.update, 100);
        },
        data(){
            return{
                per: 0
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