function RecipesController(Recipe, UserRecipe, $rootScope, $location, $stateParams, Auth){
  var ctrl = this;
  ctrl.recipes = Recipe.query();
  ctrl.newRecipe = new Recipe();
  ctrl.filteredList = ctrl.recipes;
  ctrl.myRecipeIds = [];
  Auth.currentUser().then(function(user){
    UserRecipe.get({id: user.id}, function(data){
      ctrl.myRecipes = data.user_recipes;
      ctrl.myFilteredList = ctrl.myRecipes;
      ctrl.getIds(ctrl.myRecipes);

      ctrl.filteredList.forEach(function(recipe){
        if(ctrl.startingCheck(recipe.id)!= -1){
          recipe.value = 'C';
        }
      });
      //REFACTOR!
      ctrl.myFilteredList.forEach(function(recipe){
        //difference in arg passed
        if(ctrl.startingCheck(recipe.recipe.id)!= -1){
          recipe.value = 'C';
        }
      });
    });
  });
  ctrl.search = '';

  if(!!$stateParams.id){
    ctrl.recipe = Recipe.get({id: $stateParams.id});
  };

  ctrl.getIds = function(user_recipes){
    ctrl.myRecipeIds = user_recipes.map(function(recipe){return recipe.recipe.id;});
  };

  ctrl.startingCheck = function(recipe_id){
    return ctrl.myRecipeIds.indexOf(recipe_id);
  };

  ctrl.findUserRecipeByRecipeId = function(uRecipe){
    return uRecipe.recipe.id === ctrl.recipe_id;
  };

  ctrl.checkbox = function(value, recipe_id, user_id){
    if (value === "C"){
      var user_recipe = new UserRecipe;
      user_recipe.recipe_id = recipe_id;
      user_recipe.user_id = user_id;
      user_recipe.$save();
    };
    if (value === "D"){
      ctrl.recipe_id = recipe_id;
      var uRecipe = ctrl.myRecipes.find(ctrl.findUserRecipeByRecipeId);
      UserRecipe.delete({id: uRecipe.id});
    };
  };

  ctrl.createRecipe = function(){
    Auth.currentUser().then(function(user){
      ctrl.newRecipe.user_id = user.id;
      ctrl.newRecipe.$save(function(){
        $location.path('my_recipes');
      });
    });
  };

  ctrl.editRecipe = function(){
    ctrl.recipe.$update(function(){
      $location.path('my_recipes');
    });
  };

  ctrl.deleteMyRecipe = function(recipe){
    recipe.hide=true;
    Recipe.get({id: recipe.recipe.id}, function(data){
      data.$delete(function(){
        $location.path('my_recipes');
      });
    });
  };

  ctrl.deleteRecipe = function(recipe) {
    recipe.hide=true;
    recipe.$delete(function(){
      $location.path('my_recipes');
    });
  };
}

angular
  .module('app')
  .controller('RecipesController', RecipesController);