function ViewRecipeController(Recipe, $stateParams){
  var ctrl = this;
  ctrl.note = Recipe.get({id: $stateParams.id});
}

angular
  .module('app')
  .controller('ViewRecipeController', ViewRecipeController);