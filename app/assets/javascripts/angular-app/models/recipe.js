function Recipe($resource){
  return $resource('/api/v1/recipes/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}

angular
  .module('app')
  .factory('Recipe', Recipe);