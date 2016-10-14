angular.module('ViewCtrl', []).controller('ViewController', function($scope, $http) {

	$scope.tagline = 'View the list';
	$scope.book = {};
		$scope.ViewItem = function(){
		
		var outputData =[];
		var responseStatus = null;
        $http.get("/books").then(function success(response){
            	outputData = response.data;
            	responseStatus = response.status;
            	console.log("data",outputData)
            	console.log("status",responseStatus)
            });
            
        

	}
});