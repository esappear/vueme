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
    </div>
</template>

<style>
    /*body {*/
    /*background-color: #ff0000;*/
    /*}*/
</style>

<script>
    export default {
        data () {
            return {
                newTodo: '',
                todos: [
                    {text: 'Learn Vue'}
                ]
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
            }
        }
    }
</script>