function validateKey(req, res){
    if (req.headers.apikey !== process.env.API_KEY) {
        res.status(401).send({error: " invalid api key"})
        throw new Error('invalid api key');
    }
}

module.exports = {validateKey};