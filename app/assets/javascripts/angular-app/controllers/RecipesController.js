function RecipesController(Recipe, UserRecipe, $location, $stateParams, Auth){
  var ctrl = this;
  ctrl.recipes = Recipe.query();
  ctrl.newRecipe = new Recipe();
  ctrl.myRecipeIds = [];
  ctrl.duration = ["< 30 minutes", "30-60 minutes", "> 60 minutes"];
  Auth.currentUser().then(function(user){
    UserRecipe.get({id: user.id}, function(data){
      ctrl.myRecipes = data.user_recipes;
      ctrl.getIds(ctrl.myRecipes);

      ctrl.recipes.forEach(function(recipe){
        if(ctrl.startingCheck(recipe.id)!= -1){
          recipe.value = 'C';
        }
      });
      //difference in arg passed
      ctrl.myRecipes.forEach(function(recipe){
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

  ctrl.favoritize = function(value, recipe_id, user_id){
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
      debugger;
      ctrl.newRecipe.duration = parseInt(ctrl.newRecipe.duration);
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
    recipe.hide = true;
    Recipe.get({id: recipe.recipe.id}, function(data){
      data.$delete();
    });
  };

  ctrl.deleteRecipe = function(recipe) {
    recipe.hide = true;
    recipe.$delete(function(){
      $location.path('my_recipes');
    });
  };
}

angular
  .module('app')
  .controller('RecipesController', RecipesController);