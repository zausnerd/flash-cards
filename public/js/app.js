var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function($http) {
    var returnObj = {};
    returnObj.loading = true;
    returnObj.getFlashCards = function(category) {
        if (!category || category == 'reset') {
            return $http.get('/cards').then(function(response) {
                returnObj.loading = false;
                return response.data;
            });
        } else {
          return $http.get('/cards?category=' + category).then(function(response) {
            return response.data;
          });
        }
    }
    return returnObj;
})

app.factory('ScoreFactory', function () {

    return {
        correct: 0,
        incorrect: 0
    };

});
