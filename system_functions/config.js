// add modules
const config = require('gh-config');

exports.connect = (port) => {
    config.delete('port');
    config.add({port: port});
}