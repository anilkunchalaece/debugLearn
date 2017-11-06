app.controller('practiceViewController', function($scope, $state, $stateParams,$rootScope) {

  var canvasVar = document.getElementById('canvasId');
  var canvasCx = canvasVar.getContext('2d');
  i = 0;
  var recvChar = $stateParams.char
  if(recvChar != null)
    setupCanvas(recvChar)

  function setupCanvas(character) {
    canvasVar.height = window.innerHeight;
    canvasVar.width = window.innerWidth;
    canvasCx.lineWidth = 14;
    canvasCx.lineCap = 'round';
    canvasCx.strokeStyle = 'rgb(0, 0, 50)';
    canvasCx.font = 'bold 25em helvetica';
    canvasCx.fillStyle = 'rgb(255, 0, 0)';
    canvasCx.textBaseline = 'middle';
    drawletter(character);
  }

  function drawletter(char) {
    //making letter a global variable - not the right way :) dirty solution
    letter = char;
    centerx = (canvasVar.width - canvasCx.measureText(letter).width) / 2;
    centery = canvasVar.height / 2;
    canvasCx.fillText(letter, centerx, centery);
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
