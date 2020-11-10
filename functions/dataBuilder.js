// add modules
const getUrl = require('../system_functions/getUrl');
const axios = require('../axios/axios');

const dataBuilder = async (type, data, method) => {
    let url = getUrl(type);

    let fullData = {};
    if(data) {
        fullData["method"] = method || undefined;
        fullData["path"] = data.path || undefined;
        fullData["name"] = data.name || undefined;
        fullData["data"] = data.data || undefined;
        fullData["newData"] = data.newData || undefined;
        fullData["key"] = data.key || undefined;
        fullData["fileName"] = data.fileName || undefined;
        fullData["newName"] = data.newName || undefined;
    }

    return await axios(url, fullData);
}
//exports
module.exports = dataBuilder;