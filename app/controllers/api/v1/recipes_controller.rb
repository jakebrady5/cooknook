module Api
  module V1
    class RecipesController < ApplicationController

      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        respond_with(Recipe.all.order("id DESC"))
      end

      def show
        respond_with(Recipe.find(params[:id]))
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
          params.require(:recipe).permit(:title, :instructions)
        end

    end
  end
end