<template>
    <div>
        <form v-form name="aForm" @submit.prevent="onSubmit" @change="updateStatus(aForm)">
            <div class="circle">
                <circle :percent="per" :stroke-width="5" :stroke-color="color1" :trail-width="5">
                    {{ per }}%
                </circle>
            </div>
            <label class="labelWrap">
                <span>Name:</span>
                <input v-model="a.name" v-form-ctrl name="name" required/>
                <p v-if="aForm.name.$touched && aForm.name.$error.required">没填名字呢</p>
            </label>
            <label class="labelWrap">
                <span>Email:</span>
                <input v-model="a.email" v-form-ctrl name="email" type="email"/>
                <p v-if="aForm.email.$touched && aForm.email.$error.email">没填邮箱呢</p>
            </label>
            <label class="labelWrap">
                <span>Time:</span>
                <input v-model="a.time" v-form-ctrl name="time" required />
                <p v-if="aForm.time.$touched && aForm.time.$error.time">没填时间呢</p>
            </label>
            <button>submit</button>
            <pre>{{ aForm | json}}</pre>
        </form>
    </div>
</template>
<style>
    .circle {
        width: 100px;
        margin: 10px auto;
    }
    .labelWrap {
        display: block;
    }
    .labelWrap p {
        display: inline-block;
        margin: 0;
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
                a: {},
                per: 0
            }
        },
        components:{
            'circle':Circle
        },
        methods: {
            update(){
                this.per += 5;
            },
            onSubmit: function () {
                alert(JSON.stringify(this.a));
            },
            updateStatus: function (form) {
                var num = 0, validNum = 0;
                for (var key in form){
                    if (key.indexOf('$') == -1) {
                        if (form[key].$dirty && form[key].$valid) {
                            validNum += 1;
                        }
                        num += 1;
                    }
                }
                this.per = validNum ? ~~(validNum * 100 / num) : 0;
            }
        }
    }
</script>