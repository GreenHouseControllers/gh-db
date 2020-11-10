// add modules
const conf = require('gh-config');

function joinUrl(url){
// get parts from config
    let hostUrl = conf.get('url')
// join url
    let fullUrl = hostUrl + url;
    return fullUrl;

}

function getConfUrl(key){
// gat url from config
    let url = conf.get(key);
    return joinUrl(url);
}

const getUrl = (type) => {
// choice type of operation
    if(type == 'df') return getConfUrl('dirFileUrl')
    else if(type == 'json') return getConfUrl('jsonUrl')
    else if(type == 'collection') return getConfUrl('collectionUrl')
    else if(type == 'fsState') return getConfUrl('fsStateUrl')
    else if(type == 'storageMethods') return getConfUrl('storageMethodsUrl')
    else if(type == 'storageDownload') return getConfUrl('storageDownloadUrl')
    else if(type == 'storageUpload') return getConfUrl('storageUploadUrl')
    else if(type == 'register') return getConfUrl('registerUrl')
    else if(type == 'login') return getConfUrl('loginUrl');
    else if(type == 'getErrorLog') return getConfUrl('getErrLogUrl');

}
//exports
module.exports = getUrl;