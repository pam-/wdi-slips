class StaticPagesController < ApplicationController
	def home
		@question = Question.all
	end
end 