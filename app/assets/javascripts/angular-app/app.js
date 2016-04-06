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
      .state('home.recipe', {
        url: 'recipe/:id',
        templateUrl: 'home/show.html',
        controller: 'RecipesController as ctrl'
      })
      .state('home.edit', {
        url: 'edit/:id',
        templateUrl: 'home/edit.html',
        controller: 'RecipesController as ctrl'
      });

    $urlRouterProvider.otherwise('/');

  });