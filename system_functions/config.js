// add modules
const config = require('gh-config');
const axios = require('../axios/axios');

exports.connect = async(url, token) => {
    try{
        config.delete('url');
        config.add({url: url});
    } catch(err){
        config.add({url: url});
    }
    let requestObj = {
        token: token
    }
    let requestUrl = url + '/connect/app';
    console.log(await axios(requestUrl, requestObj));
}