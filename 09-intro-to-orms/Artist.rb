class Artist

  attr_reader :id, :name

  def initialize(id: nil, name:)
    @id = id
    @name = name
  end

  def self.all
    artist_hashes = DB.execute "SELECT * FROM artists;"
    parse_hashes(artist_hashes)
  end

  def self.parse_hash(artist_hash)
    Artist.new(id: artist_hash["ArtistId"], name: artist_hash["Name"])
  end

  def self.parse_hashes(artist_hashes)
    artist_hashes.map { |artist_hash| parse_hash(artist_hash) }
  end

  def save
    DB.execute "INSERT INTO artists (name) VALUES (?);", @name
    Artist.all.last
  end

  def destroy
    if @id
      DB.execute "DELETE FROM artists WHERE ArtistId = ?;", @id
      "Success!"
    else
      "Artist hasn't been saved yet!"
    end
  end

  def self.create(name:)
    artist = Artist.new(name: name)
    artist.save
  end

  def self.find_by_name(name)
    results = DB.execute "SELECT * FROM artists WHERE name = ? LIMIT 1;", name
    artists_hash = results.first
    parse_hash(artists_hash)
  end

  def name=(new_name)
    @name = new_name
    DB.execute "UPDATE artists SET name = ? WHERE ArtistId = ?;", new_name, @id
  end

end

# Artist.new(id: 1, name: "Nicolas")
