class AnswersController < ApplicationController
	def create
		@answer = Answer.new(answer_params)
		if @answer.save
			respond_to do |format|
				format.html { redirect_to @answer.question}
				format.json { render json: @answer }
			end 
		else
			respond_to do |format|
				format.html { render @question}
				format.json { render status: 404 }
			end 			
		end
	end

	def update
		@answer = Answer.find(params[:id])
		if @answer.update_attributes(answer_params)
			respond_to do |format|
				format.html { redirect_to @answer.question}
				format.json { render json: @answer }
			end 
		else
			respond_to do |format|
				format.html { render @question}
				format.json { render status: 404 }
			end 			
		end
	end

	private
	def answer_params
		params.require(:answer).permit(:body, :question_id, :is_solution).merge(user_id: current_user.id)
	end
end 