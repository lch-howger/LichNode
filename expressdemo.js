//1.加载express模块
var express = require('express');

//2.创建app对象
var app = express();

//通过中间件监听指定的路由请求

//当用户通过get方式请求add的时候
app.get('/add', function (req, res) {
    res.statusCode(200).send('abc');
});

app.post('/add', function (req, res) {
    res.statusCode(200).send('postabc');
});

//3.启动服务
app.listen(80, function () {
    console.log('http://103.40.21.174:80');
});
