# sinatra-haml-mongoid

A basic Sinatra app, using HAML for templating, and Mongoid as the ODM for Mongo storage.

I wired up a few models as well as a `seeds.rb` situation for your convenience.

### tests

This is set up with Minitest. Run the tests from the command line!

`$ ruby test/test.rb`

### development

This is set up with a config.ru, so that it can be deployed to Heroku. Start the local server with

`$ rackup`

### deploy to Heroku

`$ heroku create your_sweet_app`

`$ heroku addons:create mongolab`

`$ git push heroku master`
