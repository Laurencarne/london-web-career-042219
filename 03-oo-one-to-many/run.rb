require 'pry'
require_relative './User.rb'
require_relative './Tweet.rb'

nico = User.new("Nicolas")
ines = User.new("Ines")

t1 = Tweet.new("My first tweet!", nico)
t2 = Tweet.new("My second tweet!", nico)
t3 = Tweet.new("My second tweet!", nico)
t4 = Tweet.new("My second tweet!", nico)
t5 = Tweet.new("My second tweet!", nico)
t6 = Tweet.new("My second tweet!", nico)
t7 = Tweet.new("My first tweet too!", ines)
t8 = Tweet.new("My second tweet too!", ines)
t9 = Tweet.new("My third tweet too!", ines)

binding.pry
puts "Mischief managed!"
