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
      // ctrl.myRecipes.forEach(function(recipe){
      //   if(ctrl.startingCheck(recipe.id)!= -1){
      //     debugger;
      //     recipe.value = 'C';
      //   }
      // })
    });
  });
  ctrl.search = '';

  if(!!$stateParams.id){
    ctrl.recipe = Recipe.get({id: $stateParams.id});
  };

  ctrl.log = function(value){
    console.log(value);
  }

  ctrl.getIds = function(user_recipes){
    ctrl.myRecipeIds = user_recipes.map(function(recipe){return recipe.id;});
  };

  ctrl.startingCheck = function(recipe_id){
    return ctrl.myRecipeIds.indexOf(recipe_id);
  };

  ctrl.checkbox = function(value, recipe_id, user_id){
    if (value === "C"){
      console.log(ctrl.myRecipes);
      //just to stop action for now
      // var user_recipe = new UserRecipe;
      // user_recipe.recipe_id = recipe_id;
      // user_recipe.user_id = user_id;
      // user_recipe.$save();
    } else {
      console.log('destroy');
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