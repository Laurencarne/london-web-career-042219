class Dessert

  attr_reader :name, :bakery

  @@all = []

  def initialize(name, bakery)
    @name = name
    @bakery = bakery
    @@all << self
  end

  def self.all
    @@all
  end

  def ingredients
    Ingredient.all.select{|ingredient| ingredient.dessert == self}
  end

  def calories
    ingredients.map{|ingredient| ingredient.calories}.sum
  end

end
