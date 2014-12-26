class QuestionsController < ApplicationController
	before_action :authenticate_user!
	def index
	end

	def show
		@question = Question.find(params[:id])
		@user = @question.user
		@answers = @question.answers
		@answer = Answer.new
		respond_to do |format|
			format.html
			format.json { render json: @question }
		end
	end

	def new
		@question = Question.new
	end

	def create
		@question = Question.with_tags(question_params)
		if @question
			respond_to do |format|
				format.html { redirect_to questions_path }
				format.json { render json: @question }
			end 
		else 
			respond_to do |format|
				format.html { render 'new' }
				format.json { render status: 404 }
			end
		end 			
	end

	def edit
		@question = question.find(params[:id])
	end

	def update
		@question = question.update_attributes(question_params)
		saving(@question)
	end

	def destroy
		@question = question.find(params[:id])
		if @question.destroy
			respond_to do |format|
				format.html { redirect_to questions_path}
				format.json {}
			end 
		else 
			respond_to do |format|
				format.html { redirect_to question_path(@question) }
				format.json { render status: 404 }
			end			
		end 
	end

	def saving(object)
		if object.save
			respond_to do |format|
				format.html { redirect_to questions_path }
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
		params.require(:question).permit(:title, :content, :tags, :user_id)
	end
end 