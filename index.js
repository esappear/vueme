/**
 * Created by qingcheng on 16/5/20.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + ''));

app.get('/', function (req, res) {
    res.sendFile('index.html', {}, function (err) {
        if(err){
            console.log(err);
            res.status(err.status).end();
        }else {
            console.log('Send!');
        }
    })
});

app.listen('8080', function (req, res) {
    console.log('App build success!');
});