module Api
  module V1
    class UserRecipesController < ApplicationController
      respond_to :json

      def show
        @user_recipes = UserRecipe.where(user_id: params[:id]).order("id DESC")
        render json: @user_recipes
      end

      def create
        @user_recipe = UserRecipe.find_or_create_by(user_recipes_params)
        if @user_recipe.save
          respond_to do |format|
            format.json {render :json => @user_recipe}
          end
        end
      end

      def destroy
        respond_with UserRecipe.destroy(params[:id])
      end

      private

        def user_recipes_params
          params.require(:user_recipe).permit(:user_id, :recipe_id)
        end

    end
  end
end