function Comment($resource){
  return $resource('http://localhost:3000/api/v1/comments/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}

angular
  .module('app')
  .factory('Comment', Comment);