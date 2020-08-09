const fs = require('fs');
const path = require('path');

const dfFuncs = require('./functions/df');
const jsonFuncs = require('./functions/json');
const crud = require('./functions/crud');


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
exports.crud = async(method, name, key, data, newData) => {
    let answer = await crud(method, name, key, data, newData);
    return answer;
}


