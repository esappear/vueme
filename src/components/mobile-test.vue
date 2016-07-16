<template>
    <div>
        <form v-form name="aForm" @submit.prevent="onSubmit" @change="updateStatus(aForm)">
            <div class="circle">
                <circle :percent="per" :stroke-width="5" :stroke-color="color1" :trail-width="5">
                    {{ per }}%
                </circle>
            </div>
            <!--<label class="labelWrap">-->
                <!--<span>Name:</span>-->
                <!--<input v-model="a.name" v-form-ctrl name="name" required/>-->
                <!--<p v-if="aForm.name.$touched && aForm.name.$error.required">没填名字呢</p>-->
            <!--</label>-->
            <!--<label class="labelWrap">-->
                <!--<span>Email:</span>-->
                <!--<input v-model="a.email" v-form-ctrl name="email" type="email"/>-->
                <!--<p v-if="aForm.email.$touched && aForm.email.$error.email">没填邮箱呢</p>-->
            <!--</label>-->
            <!--<label class="labelWrap">-->
                <!--<span>Time:</span>-->
                <!--<input v-model="a.time" v-form-ctrl name="time" required />-->
                <!--<p v-if="aForm.time.$touched && aForm.time.$error.time">没填时间呢</p>-->
            <!--</label>-->
            <ui-textbox name="name" placeholder="姓名" :value.sync="user.name" label="姓名"></ui-textbox>
            <ui-textbox name="tel" placeholder="手机" :value.sync="user.phone" label="手机"></ui-textbox>
            <ui-radio-group name="gender" :value.sync="user.gender" label="性别" :options="genderOptions"></ui-radio-group>
            <ui-button>Hello world!</ui-button>
        </form>
        <pre>{{user | json}}</pre>
    </div>
</template>
<style>
    @import "../../node_modules/keen-ui/dist/keen-ui.css";

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
    import { UiAlert, UiButton, UiTextbox } from 'keen-ui';
    export default{
//        ready(){
//            setInterval(this.update, 100);
//        },
        data(){
            return{
                a: {},
                user: {
                    name: 'Lily',
                    phone: 1212324222,
                    gender: 1
                },
                genderOptions: [
                    {text: '男', value: 0},
                    {text: '女', value: 1}
                ],
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