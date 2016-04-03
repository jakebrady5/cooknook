function NewRecipeController(Recipe, $location){
  var ctrl = this;
  ctrl.recipe = new Recipe();

  ctrl.addRecipe = function(){
    ctrl.recipe.$save(function(){
      $location.path('recipes');
    });
  };
}

angular
  .module('app')
  .controller("NewRecipeController", NewRecipeController);