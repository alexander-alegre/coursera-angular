(function() {
	angular.module('EatCalc' , [])
	.controller('EatCalcController', function($scope) {
		// current year for footer
		$scope.year = new Date().getFullYear();

		$scope.countWords = function() {
			// get user input
			var str = $scope.userInput;
			// calculate the comma separated values
			var wordCount = str.split(",").length;
			// checks if last character is , and removes one count
			if (str.slice(-1) === ',') {
				wordCount -= 1;
			}
			// show message depending on how many words the user typed
			if (wordCount == 0) {
				$scope.eatMessage = 'Please Enter Some Text';
				$scope.messageId = 'noMessage';
			} else if (wordCount != 0 && wordCount < 4) {
				$scope.eatMessage = 'Enjoy!';
				$scope.messageId = 'goodMessage';
			} else if (wordCount > 3) {
				$scope.eatMessage = 'You eat too much';
				$scope.messageId = 'badMessage';
			} else {
				$scope.eatMessage = '';
				$scope.messageId = 'noMessage';
			}
			return $scope.eatMessage;
			return $scope.messageId;
		};
	});
})();