class RegistrationsController < Devise::RegistrationsController
	before_filter :configure_permitted_parameters, if: :devise_controller?
	
	protected

	# def after_sign_up_path_for(resource)
	# 	user_path(resource)
	# end

  def configure_permitted_parameters
  	devise_parameter_sanitizer.for(:sign_up) do |user|
  		user.permit(:username, :email, :password, :password_confirmation)
  	end 

  	devise_parameter_sanitizer.for(:account_update) do |user|
  		user.permit(:username, :email, :password, :password_confirmation)
  	end 
  end
end 