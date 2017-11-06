app.controller('optionsViewController', function($scope, $state, $rootScope,$stateParams) {


  var list1 = ['a','b','c','d','e','f','g','h','i','j','k','i','l','m','n','o','p','q','r','s','t','u','u','v','a','b','c','d','e','f','g','h','i','j','k','i','l','m','n','o','p','q','r','s','t','u','u','v']
  var list2 = ['a','b','c','d','e','f','g','h','i','j','k','i','l','m','n','o','p','q','r','s','t','u','u','v','a','b','c','d','e','f','g','h','i','j','k','i','l','m','n','o','p','q','r','s','t','u','u','v'];
 

  $rootScope.selectRecv = $stateParams.select

  if ($rootScope.selectRecv == 'A') {
    $rootScope.alphabetString = list1
  } else if ($rootScope.selectRecv == 'B') {
    $rootScope.alphabetString = list2
  } else {
    $rootScope.alphabetString = list1
  }

  $scope.alphabet = [];


        for (var i = 0; i < $rootScope.alphabetString.length; i += 4) 
        {
        $scope.alphabet.push([$rootScope.alphabetString[i], $rootScope.alphabetString[i + 1], $rootScope.alphabetString[i + 2], $rootScope.alphabetString[i + 3]])
      }


  $scope.letterClick = function(letter) {
    console.log("go to letter");
    $state.go('practiceView', { 'char': letter });
  }

})
