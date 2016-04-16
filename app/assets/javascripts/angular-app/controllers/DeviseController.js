function DeviseController($scope, $rootScope, Auth, User, $location, $state){

  $rootScope.$watch('current_user.username', function(){});

  $scope.login = function(){
    Auth.login($scope.credentials).then(function(user){
      $rootScope.current_user = user;
      $scope.credentials = {};
      $location.path('home');
    }, function(error) {
      $scope.error = "Invalid email or password.";
      $location.path('login');
    });
    // .then(function(){
    //   $location.path('home');
    // });
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
      console.log(error);
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
      console.log(error);
    });
  };

  $scope.loggedIn = Auth.isAuthenticated;

  //does this belong here or in a service?
  $scope.setCurrentUser = function(){
    Auth.currentUser().then(function(user){
      $rootScope.current_user = user;
    }, function(error){
      //move this to a more global spot
      $location.path('login');
    });
  };

  //currently necessary
  $scope.setCurrentUser();

  //leaving temporarily to see if needed later
  $scope.$on('devise:new-registration', function(e, user) {
  });

  $scope.$on('devise:login', function(e, user) {
  });

  $scope.$on('devise:logout', function(e, user) {
  });

}

angular
  .module('app')
  .controller('DeviseController', DeviseController);