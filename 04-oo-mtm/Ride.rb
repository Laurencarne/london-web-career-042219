class Ride
  attr_reader :driver, :customer, :fare
  @@all = []

  def initialize(driver, customer, fare)
    @driver = driver
    @customer = customer
    @fare = fare
    @@all << self
  end

  def self.all
    @@all
  end
end
