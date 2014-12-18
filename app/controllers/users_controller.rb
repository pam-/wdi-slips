class UsersController < ApplicationController
	def show
		@user = User.find(params[:id])
		@questions = current_user.questions
		@question = Question.new
		respond_to do |format|
			format.html
			format.json { render json: @question }
		end
	end
end 