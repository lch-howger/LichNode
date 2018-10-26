var express = require('express');
var handler = require('./handler.js');
var commentListHandler = require('./commentListHandler.js');

var app = express();

app.post('/add', function (req, res) {

    handler(req, res);

});

app.post('/commentList',function (req, res) {

    commentListHandler(req, res);

})

app.listen(80, function () {
    console.log('启动')
});
