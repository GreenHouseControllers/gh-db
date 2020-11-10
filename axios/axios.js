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
    try {
        const response = await axios(config);
        return response.data;
    } catch (err) {
        return err.response.data;
    }
}
//exports
module.exports = requestFunc;