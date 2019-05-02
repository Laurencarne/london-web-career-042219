class Album < ActiveRecord::Base
  belongs_to :artist
end

# Model: Artist <=> artists
