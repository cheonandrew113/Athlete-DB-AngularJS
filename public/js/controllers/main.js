    
angular.module('athleteController', [])

.controller('mainController', function($scope, $http) {
    $scope.formData = {};

    $scope.EditItem = {};

    // when landing on the page, get all athletes and show them
    $http.get('/api/athletes')
            .success(function(data) {
                console.log(data)
                    $scope.athletes = data;
            })
            .error(function(data) {
                    console.log('Error: ' + data);
            });

    // when submitting the add form, send the text to the node API
    $scope.createAthlete = function() {
            $http.post('/api/athletes', $scope.formData)
                    .success(function(data) {
                            $scope.formData = {}; // clear the form so our user is ready to enter another
                            $scope.athletes = data;
                    })
                    .error(function(data) {
                            console.log('Error: ' + data);
                    });
    };

    // var refresh = function() {
    //     $http.get('/athletes')
    //         .success(function(response) {
    //             console.log("I got the data I requested", response);
    //             $scope.athletes = response;
    //             $scope.formData = "";
    //         });
    //   };
      
    //   refresh();

    // $scope.edit = function (id) {
    //     //Setting EditMode to TRUE makes the TextBoxes visible for the row.
    //     //The original values are saved in the variable to handle Cancel case.
    //     console.log($scope.athletes)
    //     console.log($scope.athletes._id)
    //     $scope.formData.name = $scope.formData.name;
    //     $scope.formData.sport = $scope.formData.sport;
    //     $scope.formData.nationality = $scope.formData.nationality;
    // };

    // $scope.edit = function(athlete) {
       
    // };  

    //   $http.get('/api/athletes')
    //         .success(function(data) {
    //                 $scope.athletes = data;
    //         })
    // $scope.edit = function(id) {
    //     console.log("clicked edit")
    //     $scope.message = "edit clicked"
    //     // console.log(id);
    //     // $http.get('/api/athletes' + id)
    //     //     .success(function(response) {
    //     //         console.log(response)
    //     //         $scope.formData = response;
    //     //      });
    //   };  
      
    //   $scope.update = function() {
    //       console.log("clicked update")
    //     $scope.message = "update clicked"
    //     // console.log($scope.athlete._id);
    //     // $http.patch('/athletes/' + $scope.athlete._id, $scope.formData)
    //     // .success(function(response) {
    //     //     console.log(response)
    //     //   refresh();
    //     // })
    //   };

     

    // delete athlete after checking it
    $scope.deleteAthlete = function(id) {
            $http.delete('/api/athletes/' + id)
                    .success(function(data) {
                            $scope.athletes = data;
                    })
                    .error(function(data) {
                            console.log('Error: ' + data);
                    });
    };

});