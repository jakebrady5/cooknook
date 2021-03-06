function CommentsController(Comment, $stateParams, $rootScope){
  var self = this;
  self.current_user = $rootScope.current_user;
  self.newComment = new Comment();
  self.comments = Comment.query({id: $stateParams.id});

  self.createComment = function(){
    self.newComment.recipe_id = $stateParams.id;
    self.newComment.username = self.current_user.username;
    self.newComment.user_id = self.current_user.user_id
    self.newComment.$save(function(){
      self.newComment = new Comment();
      self.comments = Comment.query({id: $stateParams.id});
    });
  };

}

angular
  .module('app')
  .controller('CommentsController', CommentsController);