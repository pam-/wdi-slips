class StaticPagesController < ApplicationController
	def home
		@question = Question.take(10)
	end
end 