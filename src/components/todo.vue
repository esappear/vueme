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
                    background-color: rgba(0, 0, 0, .1);
                    border: solid 1px rgba(0, 0, 0, .1);
                }
                span {
                    color: rgba(0,0,0,.2);
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
//    import $requests from '../services/requests'
    import storage from '../services/storage'
    export default {
        data () {
            return {
                newTodo: '',
                todos: []
            }
        },
        watch: {
            todos: function (val, oldVal) {
                storage(val);
            }
        },
        methods: {
            addTodo: function () {
                var text = this.newTodo.trim();
                if (text) {
                    var item = {text: text, checked: !1};
                    this.todos.push(item);
                    this.newTodo = '';
                }
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1);
            },
            toggleTodo: function ($event, item) {
                $event.preventDefault();
                item.checked = !item.checked;
            }
        },
        route: {
            'activate': function (transition) {
                transition.next();
            }
        },
        ready (){
            this.todos = storage();
        }
    }
</script>