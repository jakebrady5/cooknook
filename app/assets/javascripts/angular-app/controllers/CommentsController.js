function CommentsController($scope, $location, Comment, $stateParams, $state, Auth){
  var self = this;
  self.newComment = new Comment();
  self.comments = Comment.query({id: $stateParams.id});

  self.createComment = function(){
    self.newComment.recipe_id = $stateParams.id;
    Auth.currentUser().then(function(user){
      self.newComment.user_id = user.id;
      self.newComment.$save(function(){
        self.newComment = new Comment();
        
        //change to just append most recent rather than full query?
        self.comments = Comment.query({id: $stateParams.id});
      });
    });
  };

}

angular
  .module('app')
  .controller('CommentsController', CommentsController);