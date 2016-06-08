function Recipe($resource){
  return $resource('https://localhost:3000/api/v1/recipes/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}

angular
  .module('app')
  .factory('Recipe', Recipe);