function EditRecipeController(Recipe, $location, $stateParams){
  var ctrl = this;
  ctrl.recipe = Recipe.get({ id: $stateParams.id });
  ctrl.editRecipe = function(){
    ctrl.recipe.$update(function(){
      $location.path('recipes');
    });
  };
}

angular
  .module('app')
  .controller('EditRecipeController', EditRecipeController);