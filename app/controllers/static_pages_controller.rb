class StaticPagesController < ApplicationController
	def home
		@questions = Question.take(5)
		@objective = Objective.all.sample
		respond_to do |format|
			format.html {}
			format.json {render json: @objective}
		end 
	end
end 