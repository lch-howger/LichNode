var fileManager = require('./fileManager.js');
var config = require('./config.js');

module.exports = function (req, res) {

    fileManager.readFile(config.path, function (data) {

        var list = JSON.parse(data);
        

        res.send(data);

    })

}