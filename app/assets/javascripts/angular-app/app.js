angular
  .module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'home/new.html',
        controller: 'RecipesController as ctrl'
      })
      .state('home.recipes', {
        url: 'recipes',
        templateUrl: 'home/recipes.html',
        controller: 'RecipesController as ctrl'
      })
      .state('home.my_recipes', {
        url: 'my_recipes',
        templateUrl: 'home/my_recipes.html',
        controller: 'RecipesController as ctrl'
      })
      .state('home.recipe', {
        url: 'recipe/:id',
        templateUrl: 'home/show.html',
        controller: 'RecipesController as ctrl'
      })
      .state('home.edit', {
        url: 'edit/:id',
        templateUrl: 'home/edit.html',
        controller: 'RecipesController as ctrl'
      })
      .state('home.signup', {
        url: 'signup',
        templateUrl: 'devise/new_registration.html',
        controller: 'DeviseController as devise'
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'devise/login.html',
        controller: 'DeviseController as devise'
      });

    $urlRouterProvider.otherwise('/');

  });