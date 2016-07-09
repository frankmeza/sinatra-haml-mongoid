ENV['RACK_ENV'] = 'test'

require 'minitest/autorun'
require 'rack/test'
require './lib/first_name'
require './lib/last_name'
require './seeds'

require File.expand_path '../../app.rb', __FILE__