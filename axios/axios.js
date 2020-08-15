const axios = require('axios');

const requestFunc = async(url, data) => {
    const config = {
        method: 'POST',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
    const response = await axios(config);
    return response.data;
}
//exports
module.exports = requestFunc;