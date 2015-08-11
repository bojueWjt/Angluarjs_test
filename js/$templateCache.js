/**
* myApp Module
*
* Description
*/
angular.module('myApp', []).run(function($templateCache){
	$templateCache.put('Hello.html',"<div>hello everyone!</div>")
})
.directive("hello",function($templateCache){
	return {
		restrict:'E',
		template: $templateCache.get('Hello.html'),
		replace:true
	}
})