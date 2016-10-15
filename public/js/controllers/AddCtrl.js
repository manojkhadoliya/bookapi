angular.module('AddCtrl', []).controller('AddController', function($scope, $http) {

	$scope.tagline = 'Add the item';	
	$scope.book = {};

	$scope.AddItem = function(){
		var title = $scope.book.title;
		var author = $scope.book.author;
		var price = $scope.book.price;
		console.log("***************dd",$scope.book)
        // var req = {
        //     method: 'POST',
        //     url: '/books',
        //     headers: {
        //     'Content-Type': undefined
        //     },
        //     data: $scope.book
        // }

		var outputData = {};
        $http.post("/books",$scope.book).then(function success(response){
            outputData = response.data;
            responseStatus = response.status;
            console.log("data",outputData)
            console.log("status",responseStatus)
        });

        // $.ajax({
        //     async:false,
        //     url:"/books",
        //     data:$scope.book,
        //     type: "POST",
        //     success:function(data){
        //         outputData = data;
        //     }
        // })
        console.log("*********data",outputData)

	};



});