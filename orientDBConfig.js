var OrientDB = require('orientjs');

var server = OrientDB({
    host:'54.174.77.23',
    port:2424,
    username: 'root',
    password: '62BBB074A6252A6119C6D85505CE2217D0782401FABAC8C9E2F56E4699C38D8B'
});




db = server.use('summercamp');


module.exports = db;