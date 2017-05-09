angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicio', {
    url: '/page1',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('menu', {
    url: '/page2',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('radio', {
    url: '/page3',
    templateUrl: 'templates/radio.html',
    controller: 'radioCtrl'
  })

  .state('chat', {
    url: '/page4',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});