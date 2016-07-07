/**
 * Created by qingcheng on 16/5/20.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todos = [{text: '吃饭'}, {text: '睡觉'}, {text: '打豆豆'}];

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
    todos = req.body.todos;
    res.send(res.json(todos));
});

app.listen('8080', function (req, res) {
    console.log('App build success!');
});