const fs = require('fs');
const path = require('path');

const dfFuncs = require('./functions/df');
const jsonFuncs = require('./functions/json');

exports.connect = (port) => {
    fs.writeFileSync(path.join(__dirname, './config/config.txt'), port);
}

exports.df = async(method, path, name, data) => {
    let answer = await dfFuncs(method, path, name, data);
    return answer;
}

exports.json = async(method, path, name, data) => {
    let answer = await jsonFuncs(method, path, name, data);
    return answer;
}

