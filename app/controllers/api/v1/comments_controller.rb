module Api
  module V1
    class CommentsController < ApplicationController
      before_action :authenticate_user!

      respond_to :json

      def index
        @recipe = Recipe.find(params[:id])
        respond_with(@recipe.comments, serializer: nil)
      end

      def show
        @recipe = Recipe.find(params[:id])
        respond_with(@recipe.comments, serializer: nil)
      end

      def create
        puts comment_params
        @comment = Comment.new(comment_params)
        if @comment.save
          respond_to do |format|
            format.json {render :json => @comment}
          end
        end
      end

      def update
      end

      def destroy
      end

      private
        def comment_params
          params.require(:comment).permit(:body, :user_id, :recipe_id)
        end

    end
  end
end