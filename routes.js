const Main = require('./controllers/mainController');
const Services = require('./controllers/servicesController');
const Therapists = require('./controllers/therapistsController');
const apiKeyValidator = require('./models/apiKeyValidator');

module.exports = (app) => {

    app.get('/', Main.index);

    //midleware to verify the apikey, if not valid, all the routes bellow this section won't work
    app.use((req, res, next) => {
        if (!apiKeyValidator.validateKey(req.headers.apikey)) {
            console.log("invalid api key");
            res.status(401).send({error: " invalid api key"}).end();
            return;
        }
        next();
    })

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