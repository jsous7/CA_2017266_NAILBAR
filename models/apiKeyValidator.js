function validateKey(apiKey){
    return apiKey === process.env.API_KEY;
}

module.exports = {validateKey};