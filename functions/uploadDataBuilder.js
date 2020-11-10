// add modules
const getUrl = require('../system_functions/getUrl');
const uploader = require('../axios/uploader');

const dataBuilder = async (type, data) => {
    let url = getUrl(type);
    return await uploader(url, data);
}
//exports
module.exports = dataBuilder;