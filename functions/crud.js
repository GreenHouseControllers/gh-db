const fs = require('fs');
const path = require('path');

const axios = require('../axios/axios');

const crud = async (method, name, key, data, newData) => {
    const dataRequest = JSON.stringify({ method, name, key, data, newData });
    let PORT = fs.readFileSync(path.join(__dirname, '../config/config.txt'), 'utf8');
    let url = 'http://localhost:' + PORT + '/api/collection';

    let answer = await axios(url, dataRequest);
    return answer;
}
module.exports = crud;