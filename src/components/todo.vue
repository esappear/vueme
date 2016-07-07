<template>
    <div>
        <div class="form-group">
            <label for="add">Add Todo</label>
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add something to do" id="add"
                   class="form-control"/>
        </div>
        <ol>
            <li v-for="item in todos" class="form-group">
                <span>{{item.text}}</span>
                <a @click="removeTodo($index)" class="btn btn-link">X</a>
            </li>
        </ol>
        <button type="submit" @click="submitTodo" class="btn btn-default">提交</button>
    </div>
</template>

<style>
    /*body {*/
    /*background-color: #ff0000;*/
    /*}*/
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
                    this.todos.push({text: text});
                    this.newTodo = '';
                }
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1);
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
                _self.todos = event.data;
            })
        }
    }
</script>