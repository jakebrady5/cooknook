function Comment($resource){
  var Comment = $resource('http://localhost:3000/api/v1/comments/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
  return Comment;
}

angular
  .module('app')
  .factory('Comment', Comment);