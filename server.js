// require('./models/db')
// const mongoose = require('mongoose')
// // require('./athleteModel')
// const express = require('express')
// const app = express()
// const router = express.Router()
// const Athlete = require('./athlete.js')



// const db = ('mongodb+srv://andrew1:abcd1234@cluster0-7irin.mongodb.net/test?retryWrites=true&w=majority')

// mongoose.Promise = global.Promise
// mongoose.connect(db, function(err){
//     if(err){
//         console.log("error!!" + err)
//     } 
// })

// router.get('/athletes', function(req, res){
//     console.log('GET request ', res)
//     Athlete.find({})
//     .exec(function(err, athletes){
//         if (err){
//             console.log("error retrieving data")
//         } else {
//             res.json(athletes)
//         }
//     })
// })


// //     if(!err){
// //         console.log("MongoDB working")
// //     } else {
// //         console.log("Failed..")
// //     }
// // })


// app.get('/athletelist', (req, res) => {
//     console.log("Hello from index.js")
    
//     athlete1 ={
//         name: "john",
//         sport: "basketball"
//     }
//     athlete3 ={
//         name: "john",
//         sport: "basketball"
//     }
//     athlete2 ={
//         name: "john",
//         sport: "basketball"
//     }

//     let athletelist = [athlete1, athlete2, athlete3]
    
//     res.json(athletelist)
// })

// app.use(express.static(__dirname + "/public"))


// app.listen(3000, () => {
//     console.log("server working on port 3000")
// })


// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                        // create our app w/ express
    var mongoose = require('mongoose');              // mongoose for mongodb
    var morgan   = require('morgan');                // log requests to the console (express4)
    var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var database = 'mongodb+srv://andrew1:abcd1234@cluster0-7irin.mongodb.net/test?retryWrites=true&w=majority'
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