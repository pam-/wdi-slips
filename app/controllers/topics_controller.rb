class TopicsController < ApplicationController
	def index
		@topics = Topic.all
		respond_to do |format|
			format.html
			format.json { render json: @topics }
		end
	end

	def show
		@topic = Topic.find(params[:id])
		@questions = @topic.questions
		respond_to do |format|
			format.html
			format.json { render json: @topic }
		end
	end

	def new
		@topic = Topic.new
	end

	def create
		@topic = Topic.new(topic_params)
		saving(@topic)
	end

	def edit
		@topic = Topic.find(params[:id])
	end

	def update
		@topic = Topic.update_attributes(topic_params)
		saving(@topic)
	end

	def destroy
		@topic = Topic.find(params[:id])
		if @topic.destroy
			respond_to do |format|
				format.html { redirect_to topics_path}
				format.json {}
			end 
		else 
			respond_to do |format|
				format.html { redirect_to topic_path(@topic) }
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

	def topic_params
		params.require(:topic).permit(:title)
	end
end 