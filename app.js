const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.json());
app.use(express.static('assets'));

routes(app);

dotenv.config();
var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('App listening on port: ' + port);
}) 