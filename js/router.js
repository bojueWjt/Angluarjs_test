
/**
* myApp Module
*
* Description
*/
angular.module('myApp', ['ui.router']).
config(function($stateProvider,$urlRouterProvider) {
	
	//指示一个默认路径
	$urlRouterProvider.otherwise('/router1');

	//使用state函数为路径注册
	$stateProvider.state("router1",{
		url: "/router1",
		templateUrl: "tpls/router1.html"
	}).state('router1.list',{
		url: '/list',
		templateUrl: 'tpls/router1.list.html',
		controller:function($scope){
			$scope.item = ["xixi","coco","nini","minmin"];
		}
	})
})
