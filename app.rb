require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/bootstrap'
require 'mongoid'
require './lib/first_name'
require './lib/last_name'
require './seeds'
require 'haml'
require 'pry'

get '/' do
  @frank = FirstName.find_by(name: 'Frank').name
  @meza = LastName.find_by(name: 'Meza').name
  @full_name = "#{@frank} #{@meza}"
  haml :root
end

post '/name' do
  name = params.fetch 'name'
  first_name = FirstName.create name: name
  # binding.pry
  first_name.save
  haml :root
end
