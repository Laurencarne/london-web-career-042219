class Bakery

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def desserts
    Dessert.all.select{|dessert| dessert.bakery == self }
  end

  def ingredients
    desserts.map {|dessert| dessert.ingredients }.flatten
  end

  def average_calories
    desserts.map{|dessert| dessert.calories }.sum / desserts.length
  end

  def shopping_list
    ingredients.map{|ingredient| ingredient.name }.join(", ")
  end

end
