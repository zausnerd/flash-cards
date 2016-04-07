
app.factory('FlashCardsFactory', function($http) {
    var returnObj = {};

    returnObj.getFlashCards = function(category) {
        if (!category || category == 'reset') {
            return $http.get('/cards').then(function(response) {
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
