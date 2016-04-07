function DeviseController(Auth){
  ctrl = this;
  ctrl.credentials = {};
  ctrl.user = {};
  //set user back to {} on logout when implemented

  ctrl.login = function(){
    Auth.login(ctrl.credentials).then(function(user){
      ctrl.setCurrentUser;
      console.log(user);
    }, function(error) {
      console.log(error);
    });
  };

  //logs for testing, remove later
  ctrl.register = function(){
    Auth.register(ctrl.credentials).then(function(registeredUser) {
      ctrl.setCurrentUser;
      console.log(registeredUser);
    }, function(error) {
      console.log(error);
    });
  };

  ctrl.logout = function(){
    Auth.logout().then(function(){
      ctrl.user = {};
      console.log('logged out');
    }, function(error){
      console.log('error');
    });
  };

  ctrl.loggedIn = function(){
    console.log(Auth.isAuthenticated());
    return Auth.isAuthenticated();
  };

  ctrl.setCurrentUser = function(){
    Auth.currentUser().then(function(user){
      ctrl.user = user;
    })
  };

}

angular
  .module('app')
  .controller('DeviseController', DeviseController);