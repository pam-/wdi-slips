require 'sinatra'
require 'sinatra/reloader' if env.development?
require ''

@questions = ['who', 'what', 'where']

get '/' do
	@question = @questions.sample
end 