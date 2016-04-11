function ListController(UserRecipe, $rootScope){
  this.checkbox = function(id){
    console.log(id);
  }
}

angular
  .module('app')
  .controller('ListController', ListController);