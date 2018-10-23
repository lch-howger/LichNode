//第一次正式写服务器代码

//1.加载http模块
var http = require('http');
var url = require('url');

//2.创建服务
http.createServer(function (req, res) {

    res.statusCode = 200;
    //body
    if (req.url.startsWith('/add') && req.method === 'get') {

        console.log('getok');
        res.end('endok');
        // console.log(req.toString());

    } else if (req.url.startsWith('/add') && req.method === 'post') {
        console.log('postokok');
        res.end('endpostok')
    } else {
        console.log('fail');
        var resquestUrl = req.url;
        res.end('endfail' + resquestUrl);
    }

}).listen(80, function () {
    console.log('http://103.40.21.174:80/');
});


