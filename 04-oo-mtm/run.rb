require 'pry'
require_relative './Driver.rb'
require_relative './Customer.rb'
require_relative './Ride.rb'

c1 = Customer.new("Nico")
c2 = Customer.new("Dan")
c3 = Customer.new("Ines")

d1 = Driver.new("The Stig")
d2 = Driver.new("Fangio")
d3 = Driver.new("Hamilton")

r1 = Ride.new(d1, c1, 2.00)
r2 = Ride.new(d1, c2, 10.00)
r3 = Ride.new(d1, c3, 15.15)
r4 = Ride.new(d1, c1, 20.29)
r5 = Ride.new(d2, c2, 99.10)
r6 = Ride.new(d2, c3, 132367890.23)
r7 = Ride.new(d3, c1, 2020.20)
r8 = Ride.new(d3, c1, 0.01)

binding.pry
puts "Mischief managed!"
