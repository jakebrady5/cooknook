function RecipesController(Recipe, UserRecipe, $rootScope, $location, $stateParams, Auth){
  var ctrl = this;
  ctrl.recipes = Recipe.query();
  ctrl.newRecipe = new Recipe();
  ctrl.filteredList = ctrl.recipes;
  UserRecipe.get({id: 1}, function(data){
    ctrl.myRecipes = data.user_recipes;
    ctrl.myFilteredList = ctrl.myRecipes;
  });
  ctrl.search = '';

  if(!!$stateParams.id){
    ctrl.recipe = Recipe.get({id: $stateParams.id});
  };

  ctrl.createRecipe = function(){
    Auth.currentUser().then(function(user){
      ctrl.newRecipe.user_id = user.id;
      ctrl.newRecipe.$save(function(){
        $location.path('recipes');
      });
    });
  };

  ctrl.editRecipe = function(){
    ctrl.recipe.$update(function(){
      $location.path('recipes');
    });
  };

  ctrl.deleteRecipe = function(recipe) {
    recipe.hide=true;
    recipe.$delete(function(){
      $location.path('recipes');
    });
  };
}

angular
  .module('app')
  .controller('RecipesController', RecipesController);