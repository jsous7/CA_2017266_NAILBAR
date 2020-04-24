module.exports = {
    create: (req, res) => {
        console.log('Logic to create new service');
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