/**
* myApp Module
*
* Description
*/
angular.module('myApp', []).
directive('superman',function(){
	return{
		restrict:'AE',
		scope:{},
		controller:function($scope){
			$scope.abilities = [];
			this.addStrength = function(){
				$scope.abilities.push('Strength');
			};
			this.addSpeed = function(){
				$scope.abilities.push('speed');
			};
			this.addLight = function(){
				$scope.abilities.push('Light');
			};
		},
		link:function(scope,element,attrs){
			element.addClass('btn btn-primary');
			element.bind('mouseenter',function(){
				console.log(scope.abilities);
			})
		}
	}
}).directive('strength',function(){
	return{
		require:'^superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addStrength();
		}

	}
}).directive('speed',function(){
	return{
		require:'^superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addSpeed();
		}

	}
}).directive('light',function(){
	return{
		require:'^superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addLight();
		}

	}
})