const Crud = require('./crud'); // contain the logic for the CRUD

/** Routing definition */
module.exports = (router) => {
    router.get('/create', Crud.create);
    router.get('/read', Crud.read);
    router.post('/update', Crud.update);
    router.post('/delete', Crud.delete);
};