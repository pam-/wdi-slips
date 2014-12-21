class StaticPagesController < ApplicationController
	def home
		@questions = Question.take(10)
		@objective = Objective.all.sample
		puts "HERE:#{@objective}"
		respond_to do |format|
			format.html {}
			format.json {render json: @objective}
		end 
	end
end 