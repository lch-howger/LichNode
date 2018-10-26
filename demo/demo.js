var express = require('express');
var handler = require('./handler.js');

var app = express();

app.post('/add', function (req, res) {

    handler(req, res);

});

app.listen(80, function () {
    console.log('启动')
});
