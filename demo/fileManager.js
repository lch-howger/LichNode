var fs = require('fs');

/**
 * 读取文件
 * @param path
 * @param callback
 */
module.exports.readFile = function (path, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            throw err;
        } else {
            callback(data);
        }
    })
}