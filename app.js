/** Parts of the code and subroutines are based on the code of Mikhail Timofeev,
 * the reference code is on github: https://github.com/mikhail-cct/CA1-In-class-Demo.git */

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(3000, () => {
  console.log('App listening on port 3000');
}) 