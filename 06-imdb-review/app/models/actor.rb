class Actor

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def characters
    Character.all.select { |char| char.actor == self }
  end

  def characters_count
    characters.length
  end

  def self.most_characters
    @@all.max_by { |actor| actor.characters_count }
  end

end
