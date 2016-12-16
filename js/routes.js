angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('signUp', {
    url: '/page2',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('searchPage', {
    url: '/page3',
    templateUrl: 'templates/searchPage.html',
    controller: 'searchPageCtrl'
  })

  .state('articlesList', {
    url: '/page4',
    templateUrl: 'templates/articlesList.html',
    controller: 'articlesListCtrl'
  })

  .state('description', {
    url: '/page5',
    templateUrl: 'templates/description.html',
    controller: 'descriptionCtrl'
  })

  .state('userDetails', {
    url: '/page6',
    templateUrl: 'templates/userDetails.html',
    controller: 'userDetailsCtrl'
  })

  .state('offlineArticles', {
    url: '/page7',
    templateUrl: 'templates/offlineArticles.html',
    controller: 'offlineArticlesCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});