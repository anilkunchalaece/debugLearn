app.controller('mainViewController',function($scope,$state,$rootScope){

//This is a Controller for main Page
$scope.startBtn = function() {
	console.log("start btn is clicked");
	$state.go('selectView');
} // end of startBtn

}// end of controller function 
)//end of controller


