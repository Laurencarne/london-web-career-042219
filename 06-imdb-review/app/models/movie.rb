class Movie
  attr_reader :title

  @@all = []

  def initialize(title)
    @title = title
    @@all << self
  end

  def self.all
    @@all
  end

  def movie_appearances
    MovieAppearance.all.select { |ma| ma.movie == self }
  end

  def characters
    movie_appearances.map { |ma| ma.character }.uniq
  end

  def actors
    characters.map { |char| char.actor }.uniq
  end

  def actor_count
    actors.length
  end

  def self.most_actors
    @@all.max_by { |movie| movie.actor_count }
  end

end
