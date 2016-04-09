function UserService(Auth){
  this.currentUser = Auth.currentUser();
}

angular
  .module('app')
  .service('UserService', UserService);