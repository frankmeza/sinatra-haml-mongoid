require 'mongoid'
require './lib/first_name'
require './lib/last_name'
require 'pry'


Mongoid.configure do
  Mongoid.load! './mongoid.yml', ENV['RACK_ENV']
  # Mongoid.load! './mongoid.yml', :development
  # Mongoid.load! './mongoid.yml', :production
  # Mongoid.load! './mongoid.yml', :test
end

# empty the database
# Mongoid::Config.purge!

puts ENV['RACK_ENV']

# seed data
# first_name
binding.pry
frank = FirstName.create name: 'Frank'

# last_name
meza = LastName.create name: 'Meza'
