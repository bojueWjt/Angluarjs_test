/**
* myApp Module
*
* Description
*/
angular.module('myApp', []).
controller('myCtr',function($scope){
	$scope.ctrFlavor = "百威";
}).directive('drink',function(){
	return{
		scope:{
			flavor:'&'
		},
		restrict:'AE',
		template:'<input type="text" ng-model="flavor"/>'
	}
})