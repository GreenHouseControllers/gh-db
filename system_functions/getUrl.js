// add modules
const conf = require('gh-config');

function joinUrl(url){
// get parts from config
    let protocol = conf.get('protocol');
    let host = conf.get('host');
    let port = conf.get('port');
// join url
    let fullUrl = protocol + host + port + url;
    return fullUrl;

}

function getConfUrl(key){
// gat url from config
    let url = conf.get(key);
    return joinUrl(url);
}

const getUrl = (type) => {
// choice type of operation
    if(type == 'df'){
        return getConfUrl('dirFileUrl');
    }
    if(type == 'json'){
        return getConfUrl('jsonUrl');
    }
    if(type == 'collection'){
        return getConfUrl('collectionUrl');
    }
}
//exports
module.exports = getUrl;