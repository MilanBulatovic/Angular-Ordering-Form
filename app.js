//register main module
var app = angular.module('OrderForm', []);

//register controller
app.controller('MainController', [ '$scope', function($scope) {

	$scope.items = [
		{
			name: 'Tutorials Development',
			price: 500,
			active:false
		},
        {
			name: 'Tutorials Design',
			price: 300,
			active:false
		},
        {
			name: 'Code Integration',
			price: 250,
			active:false
		},
        {
			name: 'Training',
			price: 220,
			active:false
		}
	];

    $scope.target = function(e){
        console.log(e.currentTarget);
    }

}]);