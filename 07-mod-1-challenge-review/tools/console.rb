require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

c1 = Customer.new("sam","barker")
c2 = Customer.new("ian","harrison")
c3 = Customer.new("nico","marcora")

r1 = Restaurant.new('pret')
r2 = Restaurant.new('itsu')
r3 = Restaurant.new('mcd')

Review.new(c1, r1, 5, 'very good')
Review.new(c1, r1, 2, 'bnad good')
# Review.new(c1, r1, 'bad this time', 1)
# Review.new(c1, r2, 'bad', 1)
# Review.new(c2, r3, 'very bad', 1)
# Review.new(c3, r3, 'fine', 3)

binding.pry
0 #leave this here to ensure binding.pry isn't the last line