<template>
    <div>
        <div class="form-group">
            <label for="add">Add Todo</label>
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add something to do" id="add"
                   class="form-control"/>
        </div>
        <ul class="m-list">
            <li v-for="item in todos" class="form-group item" :class="{'z-checked': item.checked}">
                <i class="icn" @click="toggleTodo($event, item)"></i>
                <span>{{item.text}}</span>
                <a @click="removeTodo($index)" class="btn btn-link">X</a>
            </li>
        </ul>
        <button type="submit" @click="submitTodo" class="btn btn-default">提交</button>
    </div>
</template>

<style lang="less">
    /*body {*/
    /*background-color: #ff0000;*/
    /*}*/
    .m-list {
        list-style: none;
        .item {
            position: relative;
            &.z-checked{
                .icn {
                    background-color: #337ab7;
                }
                span {
                    color: grey;
                }
             }
        }
    }
    .icn {
        position: absolute;
        left: -28px;
        top: 8px;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border: solid 1px grey;
    }
</style>

<script>
    import $requests from '../services/requests'
    export default {
        data () {
            return {
                newTodo: '',
                todos: []
            }
        },
        methods: {
            addTodo: function () {
                var text = this.newTodo.trim();
                if (text) {
                    this.todos.push({text: text, checked: !1});
                    this.newTodo = '';
                }
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1);
            },
            toggleTodo: function ($event, item) {
                $event.preventDefault();
                item.checked = !item.checked;
            },
            submitTodo: function () {
                $requests.todoReq.save({}, {todos: this.todos}, function (event) {
                    alert('上传成功了~')
                })
            }
        },
        route: {
            'activate': function (transition) {
                transition.next();
            }
        },
        init (){
            var _self = this;
            $requests.todoReq.get().then(function (event) {
                var data = event.data;
                data.forEach(function (item) {
                    item.checked = !!item.checked;
                });
                _self.todos = data;
            })
        }
    }
</script>