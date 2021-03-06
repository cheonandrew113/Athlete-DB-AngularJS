    require('dotenv').config()
    var express  = require('express');
    var app      = express();                        // create our app w/ express
    var mongoose = require('mongoose');              // mongoose for mongodb
    var morgan   = require('morgan');                // log requests to the console (express4)
    var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var database = 'mongodb://heroku_43pf18rf:gsd2dp3gc0g9pivqratbsjk339@ds127892.mlab.com:27892/heroku_43pf18rf'
    // var database = 'mongodb+srv://andrew1:abcd1234@cluster0-7irin.mongodb.net/test?retryWrites=true&w=majority'
    var port     = process.env.PORT || 8888;         // set the port

    // configuration ===============================================================
    mongoose.connect(database);     // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes ======================================================================
    require('./app/routes.js')(app);

    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port : " + port);