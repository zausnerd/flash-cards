app.controller('StatsController', function($scope, ScoreFactory) {
	
	$scope.test = 'hello';
	$scope.scores = ScoreFactory;
});
