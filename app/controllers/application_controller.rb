class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  
  #skip_before_action :verify_authenticity_token

  respond_to :json

  # before_action :configure_permitted_parameters, if: :devise_controller?
  # skip_before_action :verify_authenticity_token

  def index
  end

end
