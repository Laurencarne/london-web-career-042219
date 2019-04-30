# - .most_appearances
#   - should return which character of film/television appears in the most films or tv shows

class Character

  attr_reader :name, :actor

  @@all = []

  def initialize(name, actor)
    @name = name
    @actor = actor
    @@all << self
  end

  def self.all
    @@all
  end

  def movie_appearances
    MovieAppearance.all.select { |ma| ma.character == self }
  end

  def show_appearances
    ShowAppearance.all.select { |sa| sa.character == self }
  end

  def movie_count
    movie_appearances.length
  end

  def show_count
    show_appearances.length
  end

  def appearance_count
    movie_count + show_count
  end

  def self.most_appearances
    @@all.max_by { |char| char.appearance_count }
  end

end
