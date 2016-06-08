function User($resource){
  return $resource('/api/v1/users/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}

angular
  .module('app')
  .factory('User', User);