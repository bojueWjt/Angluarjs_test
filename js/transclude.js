/**
* myApp Module
*
* Description
*/
angular.module('myApp', []).
directive('hello',function(){
	return {
		restrict:"E",
		transclude:true,
		template:'<div>hello everyone!<div ng-transclude></div></div>'
	}
})