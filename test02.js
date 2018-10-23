var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
var hostName = '103.40.21.174';
var port = 80;

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/get", function (req, res) {
    console.log("����url��", req.path)
    console.log("���������", req.query)
    res.send("����get����");
})

app.post("/post", function (req, res) {
    console.log("���������", req.body);
    var result = {code: 200, msg: "post����ɹ�"};
    res.send(result);
});


app.listen(port, hostName, function () {
    console.log('������������http://103.40.21.174:80/');
});