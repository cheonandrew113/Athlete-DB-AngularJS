var mongoose = require('mongoose');

module.exports = mongoose.model('Athlete', {
    image: String,
    name : String,
    sport: String,
    nationality: String,
    association: String,
    team: String
});