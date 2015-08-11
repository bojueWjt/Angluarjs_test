/**
* showApp Module
*
* Description
*/
angular.module('showApp', []).
controller('showCtr', ['$scope', function($scope){
	$scope.flag = true;

	$scope.change = function(){
		$scope.flag = !$scope.flag;
		console.log($scope.flag);
	};

	$scope.state = function(){
		return $scope.flag;
	}
}])