(function() {
	angular.module('EatCalc' , [])
	.controller('EatCalcController', function($scope) {

		$scope.countWords = function(words) {
			var numWords = function() {
				// calculate the comma separated values

				
				return $scope.wordCount;
			};
			// call function above with the values
			numWords();
			// show message depending on how many words the user typed
			if ($scope.wordCount > 3) {
				$scope.eatMessage = 'You eat too much!';
				$scope.messageId = 'badMessage';
			} else if ($scope.wordCount < 4) {
				$scope.eatMessage = 'Enjoy!';
				$scope.messageId = 'goodMessage';
			} else {
				$scope.eatMessage = '';
				$scope.messageId = 'noMessage';
			}
			return $scope.eatMessage;
			return $scope.messageId;
		};
	});
})();

