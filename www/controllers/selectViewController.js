app.controller('selectViewController',function($scope,$state){

//Select A --> Aksharamala
//Select B --> Guninthamulu

	$scope.goToList1 = function(){
		$state.go('optionsView',{select : 'A'})
	}

	$scope.goToList2 = function(){
		$state.go('optionsView',{select : 'B'})
	}
})//end of controller2