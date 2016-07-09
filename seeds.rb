require 'mongoid'
require './lib/first_name'
require './lib/last_name'

Mongoid.configure do
  Mongoid.load! './mongoid.yml', ENV['RACK_ENV']
end

# empty the database
Mongoid::Config.purge!

# seed data
# first_name
frank = FirstName.create name: 'Frank'

# last_name
meza = LastName.create name: 'Meza'
