class UsersController < ApplicationController
	def show
		@user = User.find(params[:id])
		@questions = @user.questions.paginate(page: params[:question], per_page: 4)
		@answers = @user.answers.paginate(page: params[:answer], per_page: 4)
		respond_to do |format|
			format.html
			format.json { render json: @questions }
		end
	end
end 