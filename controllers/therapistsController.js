const DAO = require('../models/DAO');

module.exports = {
    create: (req, res) => {
        DAO.setCollection('therapistsCollection');
        const userInput = req.body;
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
        console.log('Logic to fetch all services');
    },

    read: (req, res) => {
        console.log('Logic to fetch one service');
    },

    update: (req, res) => {
        console.log('Logic to update a service');
    },

    delete: (req, res) => {
        console.log('Logic to delete a service');
    }
}