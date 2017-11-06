app = angular.module('starter', ['ionic', 'ngCordova'])

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('mainView', {
    url: '/mainView',
    templateUrl: 'templates/mainView.html',
    controller: 'mainViewController'
  });

  $stateProvider.state('optionsView', {
    url: '/optionsView',
    templateUrl: 'templates/optionsView.html',
    controller: 'optionsViewController',
    params : {
      select : null
    }

  });
  $stateProvider.state('practiceView', {
    url: '/practiceView',
    templateUrl: 'templates/practiceView.html',
    controller: 'practiceViewController',
    params: {
      char: null
    }
  });
  
    $stateProvider.state('selectView',{
    url:'/selectView',
    templateUrl:'templates/selectView.html',
    controller:'selectViewController'
  })

  $urlRouterProvider.otherwise('/mainView')
});

app.run(function($ionicPlatform, $cordovaSQLite, $rootScope) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
