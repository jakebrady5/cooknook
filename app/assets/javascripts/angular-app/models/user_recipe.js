function UserRecipe($resource){
  var UserRecipe = $resource('http://localhost:3000/api/v1/user_recipes/:id.json', {id: '@id'}, {delete: {method: 'DELETE'}});
  return UserRecipe;
}

angular
  .module('app')
  .factory('UserRecipe', UserRecipe);