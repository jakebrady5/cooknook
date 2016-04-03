function Recipe($resource){
  var Recipe = $resource('http://localhost:3000/api/v1/recipes/:id.json', {id: '@id'}, {update: {method: 'PUT'}
  });
  return Recipe;
}

angular
  .module('app')
  .factory('Recipe', Recipe);