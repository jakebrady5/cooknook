module Api
  module V1
    class UsersController < ApplicationController
      respond_to :json

      def show
        respond_with(User.find(params[:id]), serializer: nil)
      end

      def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          respond_to do |format|
            format.json {render :json => @user}
          end
        end
      end

      private
        def user_params
          params.require(:user).permit(:username)
        end

    end
  end
end