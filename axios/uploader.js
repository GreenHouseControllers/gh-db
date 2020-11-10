const axios = require('axios');

const uploader = async (url, data) => {
    let config = {
        method: 'POST',
        url: url,
        headers: {
            // "Content-Type": "multipart/form-data",
            ...data.getHeaders()
        },
        data: data
    };
    try {
        const answer = await axios(config);
        return answer;
    } catch (err) {
        return err.response.data;
    }



};

module.exports = uploader;