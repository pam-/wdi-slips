class QuestionsController < ApplicationController

	def index
		@questions = Question.where(topic_id: params[:topic_id])
		respond_to do |format|
			format.html
			format.json { render json: @questions }
		end
	end

	def show
		@question = Question.find(params[:id])
		respond_to do |format|
			format.html
			format.json { render json: @question }
		end
	end

	def new
		@question = Question.new
	end

	def create
		@question = Question.new(question_params)
		saving(@question)
	end

	def edit
		@question = Question.find(params[:id])
	end

	def update
		@question = Question.update(question_params)
		saving(@question)		
	end

	def destroy
		@question = Question.find(params[:id])
		if @question.destroy
			render json: {}
		else 
			render status: 404
		end 
	end

	def saving(object)
		if object.save
			respond_to do |format|
				format.html { redirect_to object.topic }
				format.json { render json: object }
			end
		else
			respond_to do |format|
				format.html { render :new }
				format.json { render status: 404 }
			end 
		end 
	end	

	private

	def question_params
		params.require(:question).permit(:content, :topic_id)
	end
end 