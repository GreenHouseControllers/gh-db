const fs = require('fs');
const pathLib = require('path');

const axios = require('../axios/axios');

const df = async (method, path, name, data) => {
    const dataRequest = JSON.stringify({ method, path, name, data });
    let PORT = fs.readFileSync(pathLib.join(__dirname, '../config/config.txt'), 'utf8');
    let url = 'http://localhost:' + PORT + '/api/fs/df';

    let answer = await axios(url, dataRequest);
    return answer;
}
module.exports = df;