app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	
	$scope.flashCards = FlashCardsFactory.getFlashCards().then(function(cards) {
		$scope.flashCards = cards;
	});

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node',
    'reset'
	];

	$scope.activeCategory = undefined;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
		if (answer.correct) {
			ScoreFactory.correct++;
		} else {
			ScoreFactory.incorrect++;
		}
	}

	$scope.getCategoryCards = function(category) {
		$scope.activeCategory = category;
		$scope.flashCards = FlashCardsFactory.getFlashCards(category).then(function(cards) {
			$scope.flashCards = cards;
		})
	}
	
});