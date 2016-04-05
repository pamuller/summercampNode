var OrientDB = require('orientjs');

var server = OrientDB({
    host:'127.0.0.1',
    port:2424,
    username: 'root',
    password: 'password'
});




db = server.use('summercamp');


module.exports = db;