require 'sinatra'
require 'sinatra/reloader' if env.development?
require ''

get '/' do
	'heyy'
end 