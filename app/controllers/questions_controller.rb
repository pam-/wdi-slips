class QuestionsController < ApplicationController
	def index
		@questions = Question.all
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
			respond_to do |format|
				format.html { redirect_to questions_path}
				format.json {}
			end 
		else 
			respond_to do |format|
				format.html { redirect_to topic_path(@question) }
				format.json { render status: 404 }
			end			
		end 
	end

	def saving(object)
		if object.save
			respond_to do |format|
				format.html { redirect_to topic_path(object) }
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
		params.require(:question).permit(:content, :topic)
	end
end 