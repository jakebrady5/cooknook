function User($resource){
  var User = $resource('http://localhost:3000/api/v1/users/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
  return User;
}

angular
  .module('app')
  .factory('User', User);