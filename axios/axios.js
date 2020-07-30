const axios = require('axios');

const requestFunc = async (url, dataRequest) => {
    let data = JSON.parse(dataRequest);
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

module.exports = requestFunc;