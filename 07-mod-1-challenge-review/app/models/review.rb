class Review

    attr_reader :customer, :restaurant, :rating
    attr_accessor :content

    @@all = []

    def initialize(customer, restaurant, rating, content)
        @customer = customer
        @restaurant = restaurant
        @rating = rating
        @content = content

        @@all << self
    end

    def rating=(new_rating)
        if new_rating > 5
            @rating = 5
        elsif new_rating < 1
            @rating = 1
        else
            @rating = rating
        end
    end

    def self.all
        @@all
    end
end

