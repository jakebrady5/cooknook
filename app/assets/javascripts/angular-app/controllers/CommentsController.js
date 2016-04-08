function CommentsController($location, Comment, $stateParams, $state, Auth){
  var self = this;
  self.newComment = new Comment();
  self.comments = Comment.query({id: $stateParams.id});

  if(!!$stateParams.id){
    Auth.currentUser().then(function(user){
      console.log(user.id);
    });
  }

  self.createComment = function(){
    self.newComment.recipe_id = $stateParams.id;
    Auth.currentUser().then(function(user){
      self.newComment.user_id = user.id;
      self.newComment.$save(function(){
        console.log('comment saved!');
        $state.go($state.current, {}, {reload: true});
      });
    });
  };

}

angular
  .module('app')
  .controller('CommentsController', CommentsController);