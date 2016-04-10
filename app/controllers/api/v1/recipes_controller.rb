module Api
  module V1
    class RecipesController < ApplicationController
      before_action :authenticate_user!

      respond_to :json

      def index
        respond_with(Recipe.all.order("id DESC"), serializer: nil)
      end

      def show
        respond_with(Recipe.find(params[:id]), serializer: nil)
      end

      def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
          respond_to do |format|
            format.json {render :json => @recipe}
          end
        end
      end

      def update
        @recipe = Recipe.find(params[:id])
        if @recipe.update(recipe_params)
          respond_to do |format|
            format.json {render :json => @recipe}
          end
        end
      end

      def destroy
        respond_with Recipe.destroy(params[:id])
      end

      private
        def recipe_params
          params.require(:recipe).permit(:title, :instructions, :ingredients, :user_id)
        end

    end
  end
end