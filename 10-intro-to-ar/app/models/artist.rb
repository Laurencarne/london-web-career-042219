class Artist < ActiveRecord::Base
  has_many :albums
  has_many :fandoms
  has_many :fans, through: :fandoms
end
