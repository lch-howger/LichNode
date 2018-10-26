var fileManager = require('./fileManager.js');
var config = require('./config.js');

module.exports = function (req, res) {

    fileManager.readFile(config.path, function (data) {

        res.send(data);

    })

}