class ObjectivesController < ApplicationController

	def slips
		@students = Student.all.shuffle
		@objectives = Objective.all.shuffle.take(25)
		@pairs = Objective.make_pairs(@students, @objectives)
		respond_to do |format|
			format.html
			format.json { render json: { pairs: @pairs} }
		end 
	end

	def index
		@objectives = Objective.where(topic_id: params[:topic_id])
		respond_to do |format|
			format.html
			format.json { render json: @objectives }
		end
	end

	def show
		@objective = Objective.find(params[:id])
		respond_to do |format|
			format.html
			format.json { render json: @objective }
		end
	end

	def new
		@objective = Objective.new
	end

	def create
		@objective = Objective.new(objective_params)
		saving(@objective)
	end

	def edit
		@objective = Objective.find(params[:id])
	end

	def update
		@objective = Objective.update(objective_params)
		saving(@objective)		
	end

	def destroy
		@objective = Objective.find(params[:id])
		if @objective.destroy
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

	def objective_params
		params.require(:objective).permit(:content, :topic_id)
	end
end 