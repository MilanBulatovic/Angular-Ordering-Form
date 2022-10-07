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

    //Toggle active class on item
    $scope.toggleClass = function(item){
        item.active = !item.active;
    };

    //Get total price if item is active
    $scope.totalPrice = function() {
        var total = 0;

        $scope.items.forEach(item => {
            if(item.active) {
                total += item.price;
            }
        });
        

        return total;
    }

}]);