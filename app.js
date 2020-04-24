/** Parts of the code and subroutines are based on the code of Mikhail Timofeev,
 * the reference code is on github: https://github.com/mikhail-cct/CA1-In-class-Demo.git */

 const bodyParser = require('body-parser'),
      express = require('express');

const app = express();
app.use(bodyParser.json());

const db = require('./models/db');
const servicesCollection = "servicesCollection";
const therapistsCollection = "therapistsCollection";

const routes = require('./routes');
routes(app);

app.use((e, req, res, next) => {
  res.status(e.status).json({
    error : {
      message : e.message
    }
  });
});

db.dbConnect((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('Connected to database, app listening on port 3000');
    })
  } else {
    console.log('Error when connecting to database');
    process.exit(1);
  }  
});