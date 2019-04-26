class Customer
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def book_a_ride(driver)
    Ride.new(driver, self)
  end

  def rides
    Ride.all.select { |ride| ride.customer == self }
  end

  def drivers
    rides.map { |ride| ride.driver }.uniq
  end

  def fares
    rides.map { |ride| ride.fare }
  end

  def total_spend
    fares.sum
  end

  def average_spend_per_ride
    total_spend / rides.length
  end

end
