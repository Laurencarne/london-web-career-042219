class User

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end

  def messages
    tweets.map { |tweet| tweet.message }
  end

  def tweet_count
    tweets.length
  end

  def self.most_prolific
    User.all.max_by { |user| user.tweet_count }
  end

end
