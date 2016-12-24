(function() {
	'use strict';


	angular.module('MsgApp', [])
	.controller('MsgController', MsgController); 

	MsgController.$inject = ['$scope'];
	function MsgController($scope) {
		$scope.name = 'Alex';

		$scope.stateOfBeing = 'hungry';


		$scope.sayMessage = function() {
			return $scope.name + ' likes to eat snacks all day!';
		};

		$scope.feed = function() {
			$scope.stateOfBeing = 'fed';
		};

	}

})();