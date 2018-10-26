var config = require('./config.js');
var fs = require('fs');
var mPath = require('path');
var querystring = require('querystring');

module.exports = function (req, res) {

    //读取data.json
    var path = config.path;
    readFile(path, function (data) {

        //将data转为list
        var list = JSON.parse(data);

        //获取post参数json
        getPostJson(req, function (json) {

            //将json添加到list里面
            json.id = list.length;
            list.push(json);
            var listString = JSON.stringify(list);

            //将listString写入data.json
            writeFile(path, listString, function () {

                res.send(listString);

            });

        })

    })

}

/**
 * 读取文件
 * @param path
 * @param callback
 */
function readFile(path, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            throw err;
        } else {
            callback(data);
        }
    })
}

/**
 * 获取post参数json
 * @param req
 * @param callback
 */
function getPostJson(req, callback) {
    var array = [];
    req.on('data', function (chunk) {
        array.push(chunk);
    })

    req.on('end', function () {
        var arrayString = Buffer.concat(array).toString();
        var json = querystring.parse(arrayString);
        callback(json);
    });
}

/**
 * 写入文件
 * @param path
 * @param string
 * @param callback
 */
function writeFile(path, string, callback) {
    fs.writeFile(path, string, function (err) {
        if (err) {
            throw err;
        } else {
            callback();
        }
    })
}