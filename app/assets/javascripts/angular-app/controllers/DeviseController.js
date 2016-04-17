function DeviseController($scope, $rootScope, Auth, User, $location, $state){

  $rootScope.$watch('current_user.username', function(){});

  $scope.login = function(){
    Auth.login($scope.credentials).then(function(user){
      $rootScope.current_user = user;
      $scope.credentials = {};
      $location.path('recipes');
    }, function(error) {
      $scope.error = "Invalid email or password.";
      $location.path('login');
    });
  };

  $scope.register = function(){
    Auth.register($scope.credentials).then(function(registeredUser) {
      $rootScope.current_user = registeredUser;
      $rootScope.current_user.username = $scope.credentials.username;
      User.get({id: registeredUser.id}, function(user){
        user.username = $scope.credentials.username;
        user.$update(function(u, success){
          $rootScope.current_user = u;
        });
      });
    }, function(error) {
      $scope.error = "Invalid email or password.";
      $location.path('login');
    }).then(function(){
        $location.path('home');
      });
  };

  $scope.logout = function(){
    var config = {
        headers: {
            'X-HTTP-Method-Override': 'DELETE'
        }
    };
    Auth.logout(config).then(function(){
      $rootScope.current_user = undefined;
      $location.path('home');
    }, function(error){
      $scope.error = "Error Logging Out.";
      $location.path('home');
    });
  };

  $scope.loggedIn = Auth.isAuthenticated;

  $scope.setCurrentUser = function(){
    Auth.currentUser().then(function(user){
      $rootScope.current_user = user;
    }, function(error){
      $location.path('login');
    });
  };

  $scope.setCurrentUser();

}

angular
  .module('app')
  .controller('DeviseController', DeviseController);