app.controller('mainViewController',function($scope,$state,$rootScope){

//This is a Controller for main Page
$scope.startBtn = function() {
	console.log("start btn is clicked");
	$state.go('selectView');
} // end of startBtn

/*
$rootScope.startingSound = document.getElementById("startingSoundId")

 $scope.$on('$ionicView.enter', function() {
     // Code you want executed every time view is opened
     $rootScope.startingSound.play();
  })
*/
}// end of controller function 
)//end of controller


