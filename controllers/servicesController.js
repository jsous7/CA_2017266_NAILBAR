const DAO = require('../models/DAO');
const apiKeyValidator = require('../models/apiKeyValidator');

module.exports = {
    create: (req, res) => {
        apiKeyValidator.validateKey(req, res);
        DAO.setCollection('servicesCollection');
        const userInput = req.body;
        //TODO: validate and sanitize userInput
        DAO.create(userInput).then((result) => {
            res.json({
                result : result,
                document : result.ops[0],
                msg : "document created sucessfully!",
                error : null
            })
        }).catch((errorMessage) => {
            const error = new Error(errorMessage);
            error.status = 400;
            res.json()
        });
    },

    readAll: (req, res) => {
        apiKeyValidator.validateKey(req, res);
        DAO.setCollection('servicesCollection');
        DAO.readAll().then((result) => {
            res.json({result : result});
        }).catch((errorMessage) => {
            const error = new Error(errorMessage);
            error.status = 400;
            res.json()
        })
    },

    read: (req, res) => {
        apiKeyValidator.validateKey(req, res);
        DAO.setCollection('servicesCollection');
        const id = req.params.id;
        DAO.read(id).then((result) => {
            res.json({result : result});
        }).catch((errorMessage) => {
            const error = new Error(errorMessage);
            error.status = 400;
            res.json()
        })
    },

    update: (req, res) => {
        apiKeyValidator.validateKey(req, res);
        DAO.setCollection('servicesCollection');
        const id = req.params.id;
        const userInput = req.body;
        DAO.update(id, userInput).then((result) => {
            res.json({result : result});
        }).catch((errorMessage) => {
            const error = new Error(errorMessage);
            error.status = 400;
            res.json()
        })
    },

    delete: (req, res) => {
        apiKeyValidator.validateKey(req, res);
        DAO.setCollection('servicesCollection');
        const id = req.params.id;
        DAO.delete(id).then((result) => {
            res.json({result : result});
        }).catch((errorMessage) => {
            const error = new Error(errorMessage);
            error.status = 400;
            res.json()
        })
    }
}