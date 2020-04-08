angular.module('athleteService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Athlete', function($http) {
        return {
            get : function() {
                return $http.get('/api/athletes');
            },
            create : function(athleteData) {
                return $http.post('/api/athletes', athleteData);
            },
            delete : function(id) {
                return $http.delete('/api/athletes/' + id);
            }
        }
    });