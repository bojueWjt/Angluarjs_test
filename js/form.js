/**
* formApp Module
*
* Description
*/
angular.module('formApp', []).
controller('formCtr', ['$scope', function($scope){
	$scope.userInfo = {
		email : '627789064@qq.com',
		password : '6277889',
		autoLoad : true
	};

	$scope.showInfo = function(){
		console.log($scope.userInfo);
	}

	$scope.changeM = function(){
		$scope.userInfo = {
			email : '1354663@qq.com',
			password : '44124134',
			autoLoad : false
		}
	}
}])