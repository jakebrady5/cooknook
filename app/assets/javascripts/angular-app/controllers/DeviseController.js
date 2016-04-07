function DeviseController($scope, Auth){
  //set user back to {} on logout when implemented

  $scope.login = function(){
    debugger;
    Auth.login($scope.credentials).then(function(user){
      $scope.setCurrentUser();
      $scope.credentials = {};
      console.log(user);
    }, function(error) {
      console.log(error);
    });
  };

  //logs for testing, remove later
  $scope.register = function(){
    Auth.register($scope.credentials).then(function(registeredUser) {
      $scope.setCurrentUser;
      $scope.credentials = {};
      console.log(registeredUser);
    }, function(error) {
      console.log(error);
    });
  };

  $scope.logout = function(){
    Auth.logout().then(function(){
      $scope.user = {};
      console.log('logged out');
    }, function(error){
      console.log('error');
    });
  };

  $scope.loggedIn = Auth.isAuthenticated;

  $scope.setCurrentUser = function(){
    Auth.currentUser().then(function(user){
      debugger;
      $scope.user = user;
    });
  };

}

angular
  .module('app')
  .controller('DeviseController', DeviseController);