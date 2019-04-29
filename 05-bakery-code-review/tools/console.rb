require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

ians_bakery = Bakery.new("Ian's Bakery")
sams_bakery = Bakery.new("Sam's Bakery")
lucys_bakery = Bakery.new("Lucy's Bakery")

chocolate_cake = Dessert.new("Chocolate Cake", ians_bakery)
bread = Dessert.new("Bread", ians_bakery)
carrot_cake = Dessert.new("Carrot Cake", sams_bakery)
croissant = Dessert.new("Croissant", sams_bakery)
lemon_cake = Dessert.new("Lemon Cake", lucys_bakery)

chocolate = Ingredient.new("Chocolate", 200, chocolate_cake)
sugar = Ingredient.new("Sugar", 300, chocolate_cake)
chocolate_icing = Ingredient.new("Chocolate Icing", 500, chocolate_cake)
wheat = Ingredient.new("Wheat", 150, bread)
seeds = Ingredient.new("Seeds", 20, bread)
carrot = Ingredient.new("Carrot", 100, carrot_cake)
flour = Ingredient.new("Flour", 50, carrot_cake)
butter = Ingredient.new("Butter", 400, croissant)
pastry = Ingredient.new("Pastry", 600, croissant)
lemon = Ingredient.new("Lemon", 1000, lemon_cake)
icing = Ingredient.new("Icing", 500, lemon_cake)

Pry.start
