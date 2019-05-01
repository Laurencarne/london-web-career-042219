class Restaurant
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    # returns an array of all restaurants
    @@all
  end

  def self.find_by_name(name)
    # given a string of restaurant name, returns the first restaurant that matches
    self.all.find {|restaurant| restaurant.name == name }
  end

  def customers
    # Returns a **unique** list of all customers who have reviewed a particular restaurant.
    reviews.map{|review| review.customer}.uniq
  end

  def reviews
    # returns an array of all reviews for that restaurant
    Review.all.select{|review| review.restaurant == self}
  end

  def average_star_rating
    # returns the average star rating for a restaurant based on its reviews
    reviews.inject(0){|sum, review| sum + review.rating} / reviews.length.to_f
  end

  def longest_review
    # returns the longest review content for a given restaurant
    reviews.max_by {|review| review.content.length}
  end

end
