/**
* myApp Module
*
* Description
*/
angular.module('myApp', []).
controller('myCtrl',function($scope){
	$scope.sayHello = function(name){
		console.log('hello' + name);
	}
}).directive('greeting',function(){
	return {
		restrict:'AE',
		scope:{
			greet:'&'
		},
		template:'<input ng-model="userName" type="text" />'+
		'<button ng-click="greet({name:userName})">greet</button><br>'
	}
})