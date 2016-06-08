function User($resource){
  return $resource('https://0.0.0.0:3000/api/v1/users/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}

angular
  .module('app')
  .factory('User', User);