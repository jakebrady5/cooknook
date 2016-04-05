function RecipesController(Recipe, $location, $state, $stateParams){
  var ctrl = this;
  ctrl.recipes = Recipe.query();
  ctrl.newRecipe = new Recipe();
  ctrl.filteredList = ctrl.recipes;

  if(!!$stateParams.id){
    ctrl.recipe = Recipe.get({id: $stateParams.id});
  };

  ctrl.addRecipe = function(){
    ctrl.newRecipe.$save(function(){
      $location.path('recipes');
    });
  };

  ctrl.editRecipe = function(){
    ctrl.recipe.$update(function(){
      $location.path('recipes');
    });
  };

  ctrl.deleteRecipe = function(recipe) {
    recipe.$delete(function(){
      $state.go($state.current, {}, {reload: true});
    });
  };

  ctrl.search = '';

  // ctrl.refilter = function(){
  //   ctrl.filteredList = $filter('filter')(ctrl.recipes, ctrl.search);
  // };

  // ctrl.refilter();
}

angular
  .module('app')
  .controller('RecipesController', RecipesController);