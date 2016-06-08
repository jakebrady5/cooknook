function UserRecipe($resource){
  return $resource('https://localhost:3000/api/v1/user_recipes/:id.json', {id: '@id'}, {delete: {method: 'DELETE'}});
}

angular
  .module('app')
  .factory('UserRecipe', UserRecipe);