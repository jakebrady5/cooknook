function DeviseController($scope, Auth){

  $scope.console = function (){
    debugger;
  }

  $scope.login = function(){
    Auth.login($scope.credentials).then(function(user){
      //$scope.setCurrentUser();
      $scope.credentials = {};
      console.log(user);
      console.log(Auth.isAuthenticated());
    }, function(error) {
      console.log(error);
    });
  };

  //logs for testing, remove later
  $scope.register = function(){
    Auth.register($scope.credentials).then(function(registeredUser) {
      //$scope.setCurrentUser;
      $scope.credentials = {};
      console.log(registeredUser);
    }, function(error) {
      console.log(error);
    });
  };

  $scope.logout = function(){
    var config = {
        headers: {
            'X-HTTP-Method-Override': 'DELETE'
        }
    };
    Auth.logout(config).then(function(){
      $scope.user = {};
      console.log('logged out');
    }, function(error){
      console.log(error);
    });
  };

  $scope.loggedIn = Auth.isAuthenticated;

  $scope.setCurrentUser = function(){
    Auth.currentUser().then(function(user){
      $scope.user = user;
    });
  };

  Auth.currentUser()
    .then(function(user) {
      $scope.user = user;
    });

  $scope.$on('devise:new-registration', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:login', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:logout', function(e, user) {
    $scope.user = {};
  });

}

angular
  .module('app')
  .controller('DeviseController', DeviseController);