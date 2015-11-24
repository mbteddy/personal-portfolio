var myApp = angular.module('myApp', ['ui.router'])

// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('projects', {
    url:'/projects',
    templateUrl: 'templates/projects.html',
    controller: 'ProjectsController',
  })
  .state('contact', {
    url:'/contact',
    templateUrl: 'templates/contact.html',
    controller: 'ContactController',
  })
})

// Home page controller
.controller('HomeController', function($scope, $http){

})

// Projects page controller
.controller('ProjectsController', function($scope, $http){
  $http.get('data/projects.json').then(function(response) {
        $scope.data = response.data;
        console.log($scope.data);
    });
})

// Athletics page controller
.controller('ContactController', function($scope, $http){
  
})