// load the athlete model
var Athlete = require('./models/athlete');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all athletes
    app.get('/api/athletes', function(req, res) {

        // use mongoose to get all athletes in the database
        Athlete.find(function(err, athletes) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(athletes); // return all athletes in JSON format
        });
    });

    // create athlete and send back all athletes after creation
    app.post('/api/athletes', function(req, res) {

        // create a athlete, information comes from AJAX request from Angular
        Athlete.create({
            image: req.body.image,
            name : req.body.name,
            sport: req.body.sport,
            nationality: req.body.nationality,
            association: req.body.association,
            team: req.body.team,
        }, function(err, athlete) {
            if (err)
                res.send(err);

            // get and return all the athletes after you create another
            Athlete.find(function(err, athletes) {
                if (err)
                    res.send(err)
                res.json(athletes);
            });
        });

    });

    // delete a athlete
    app.delete('/api/athletes/:athlete_id', function(req, res) {
        Athlete.remove({
            _id : req.params.athlete_id
        }, function(err, athlete) {
            if (err)
                res.send(err);

            // get and return all the athletes after you create another
            Athlete.find(function(err, athletes) {
                if (err)
                    res.send(err)
                res.json(athletes);
            });
        });
    });
};