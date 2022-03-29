// THIRD_PARTY MODULES IMPORT
const express = require('express');

// MY MODULES IMPORT
const constants = require('./constants');
const systemServices = require('./services/systemService');

// VARIABLES
const app = express();

app.use(express.json());

// ENABLES CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
});

// ROUTES
require('./routes/heroesRoutes')(app);


// STARTS THE SERVER
app.listen(constants.SYSTEM.PORT, () => {
    console.log('App listening on port ', constants.SYSTEM.PORT);
});

