function RecipesController(Recipe, $location, $state){
  var ctrl = this;
  ctrl.recipes = Recipe.query();

  ctrl.deleteRecipe = function(recipe) {
    recipe.$delete(function(){
      $state.go($state.current, {}, {reload: true});
    });
  };
}

angular
  .module('app')
  .controller('RecipesController', RecipesController);