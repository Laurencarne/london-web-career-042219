class Animal

    attr_reader :species
    attr_accessor :age

    @@all = []

    def self.all
        # self == Animal
        @@all
    end

    def initialize(species, age)
        # self == tiger
        @species = species
        @age = age
        @@all << self
    end

    def mutate (new_species)
        @species = new_species
        # self == tiger
        self.make_ten_years_older
    end

    def make_ten_years_older
        # self == tiger
        @age += 10
    end

    def self.oldest_animal
        Animal.all.max_by { |animal| animal.age }
    end

    def self.lions
        Animal.all.select {|animal| animal.species == 'lion'}
    end

end