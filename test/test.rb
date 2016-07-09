require 'mongoid'
require './lib/first_name'
require './test/test_helper'

class MyTest < MiniTest::Test
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_hello_world
    get '/'
    assert last_response.ok?
    assert_empty last_response.errors
  end

  def test_seeds
    frank = FirstName.find_by name: 'Frank'
    assert_equal frank.name, 'Frank'
  end

  def test_first_name
    francisco = FirstName.create name: 'Francisco'
    assert_equal francisco.name, 'Francisco'
  end
end
