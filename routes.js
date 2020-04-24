const Main = require('./controllers/mainController');
const Services = require('./controllers/servicesController');
const Therapists = require('./controllers/therapistsController');

/** Route definition */
module.exports = (app) => {
    app.get('/', Main.index);

    app.get('/services', Services.readAll);
    app.post('/service', Services.create);
    app.get('/service/:id', Services.read);
    app.patch('/service/:id', Services.update);
    app.delete('/service/:id', Services.delete);

    app.get('/therapists', Therapists.readAll);
    app.post('/therapist', Therapists.create);
    app.get('/therapist/:id', Therapists.read);
    app.patch('/therapist/:id', Therapists.update);
    app.delete('/therapist/:id', Therapists.delete);
};