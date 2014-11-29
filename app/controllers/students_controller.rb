class StudentsController < ApplicationController
	def index
		@students = Student.all.shuffle
		@questions = Question.find_25(@students)

		render json: { questions: @questions}
	end

end 