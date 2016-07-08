/**
 * Created by qingcheng on 16/5/20.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todos = [{text: '吃饭', checked: !0}, {text: '睡觉'}, {text: '打豆豆'}];

app.use(express.static(__dirname + ''));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.sendFile('index.html', {}, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Send!');
        }
    })
});

app.get('/api/todo', function (req, res) {
    console.log('Get success!');
    res.send(res.json(todos));
});

app.post('/api/todo', function (req, res) {
    console.log('Post success!');
    console.log(req.body.data);
    todos.push(req.body);
    res.send(res.json(todos));
});

app.put('/api/todo', function (req, res) {
    var data = req.body;
    console.log('put');
    console.log(data);
    todos.forEach(function (item) {
        if(item.text == data.text){
            item.checked = data.checked;
        }
    })
    res.send(res.json(todos));
});

app.delete('/api/todo', function (req, res) {
    console.log('delete');
    console.log(req.query.index);
    todos.splice(req.query.index, 1);
    res.send(res.json(todos));
})

app.listen('8080', function (req, res) {
    console.log('App build success!');
});