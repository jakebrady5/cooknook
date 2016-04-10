module Api
  module V1
    class UserRecipesController < ApplicationController
      respond_to :json

      def index
        @user_recipes = UserRecipe.where(user_id: params[:id])
        render json: @user_recipes
      end

      def show
        @user_recipes = UserRecipe.where(user_id: params[:id])
        render json: @user_recipes
      end

    end
  end
end