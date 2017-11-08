app.controller('practiceViewController', function($scope, $state, $stateParams,$rootScope,$ionicPlatform) {

  var recvChar = $stateParams.char
  if(recvChar != null){
    ionic.DomUtil.ready(function() {
        document.addEventListener("deviceready", function() {
             canvasVar = document.getElementById("canvasId");
             canvasCx = canvasVar.getContext('2d');
            setupCanvas($stateParams.char)
        }, false);
    });
        
  }

  function setupCanvas(character) {
    canvasVar.height = window.innerHeight;
    canvasVar.width = window.innerWidth;
    canvasCx.lineWidth = 14;
    canvasCx.lineCap = 'round';
    canvasCx.strokeStyle = 'rgb(0, 0, 50)';
    canvasCx.font = 'bold 25em helvetica';
    canvasCx.fillStyle = 'rgb(255, 0, 0)';
    //canvasCx.textBaseline = 'middle';
    drawletter(character);
  }

  function drawletter(char) {
    //making letter a global variable - not the right way :) dirty solution
    console.log(char)
    centerx = (canvasVar.width - canvasCx.measureText(char).width) / 2;
    centery = canvasVar.height / 2;
    canvasCx.fillText(char,centerx,centery)
  } //end of draw letter

  $scope.nextLetter = function() {
    console.log("go to next letter");
    if($rootScope.alphabetString.indexOf(recvChar) == $rootScope.alphabetString.length){
        index = 0
      }
     else
     {
        index = $rootScope.alphabetString.indexOf(recvChar) + 1    
     }
     recvChar = $rootScope.alphabetString[index]
    setupCanvas(recvChar)
 
  }

  $scope.goToMenu = function() {
    $state.go('selectView')

  }

  $scope.prevLetter = function(){
        if($rootScope.alphabetString.indexOf(recvChar)== 0){
        index = $rootScope.alphabetString.length
      }
     else{
        index = $rootScope.alphabetString.indexOf(recvChar) - 1     
     }
     recvChar = $rootScope.alphabetString[index]
    setupCanvas(recvChar)
  }
})
