/** All the code and subroutines are based on the code of Mikhail Timofeev,
 * the reference code is on github: https://github.com/mikhail-cct/CA1-In-class-Demo.git */

/** initialize the services required to make my app to work */
const http = require('http'), // To protect my code, It is better to use constant instead of variables. It Avoid overwrite the values by accident.
      path = require('path'),
      express = require('express');


/** Defining some constants */
const router = express();
const server = http.createServer(router);


/** route bootstrap */
const routes = require('./routes');
// Initialize the routes, looks for the default files inside 'views', note that it identifies the file index.html by itself
router.use(express.static(path.resolve(__dirname, 'views')));
//We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
router.use(express.urlencoded({extended: true}));
router.use(express.json()); //We include support for JSON that is coming from the client
routes(router);//call the router definition


/** Initializing the server at localhost:2000 */
server.listen(process.env.PORT || 2000, process.env.IP || "0.0.0.0", function() {
  const addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});