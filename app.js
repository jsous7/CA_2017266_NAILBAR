/** Parts of the code and subroutines are based on the code of Mikhail Timofeev,
 * the reference code is on github: https://github.com/mikhail-cct/CA1-In-class-Demo.git */

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(express.static('views'));

const routes = require('./routes');
routes(app);

const dotenv = require('dotenv');
dotenv.config();
var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('App listening on port: ' + port);
}) 