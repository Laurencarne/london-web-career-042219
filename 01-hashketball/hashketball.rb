require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson" => {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        "Reggie Evans" => {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        "Brook Lopez" => {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        "Mason Plumlee" => {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        "Jason Terry" => {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      }
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien" => {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        "Bismak Biyombo" => {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        "DeSagna Diop" => {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        "Ben Gordon" => {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        "Brendan Haywood" => {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      }
    }
  }
end


def all_players
  # create empty array for player hashes
  player_hashes = []

  # iterate over all players, push player hash into array
  game_hash.each do |team, team_hash|
    team_hash[:players].each do |name, player_hash|
      player_hashes << player_hash.merge({name: name, team: team_hash[:team_name]})
    end
  end

  # return player hashes array
  player_hashes
end

def all_player_names
  all_players.map { |player| player[:name] }
end

def find_player_by_name(name)
  # take name: string
  # return the player hash with that name
  all_players.find do |player|
    player[:name] == name
  end
end

def get_players_with_shoes_bigger_than(size)
  # take size: number
  # return array of player with shoes bigger than the given size
  all_players.select { |player| player[:shoe] > size }
end

def get_players_for_team(team_name)
  all_players.select { |player| player[:team] == team_name }
  .map { |player| player[:name] }
end

def points_by_players
  all_players.map do |player|
    "#{player[:name]} scored #{player[:points]}"
  end
end

def players_by_points

  all_players.sort do |player_a, player_b|
    player_b[:points] <=> player_a[:points]
  end

end

def player_with_the_most_points
  player = all_players.max_by {|player| player[:points] }
  player[:name]
end

binding.pry

# # EXERCISE
# # What do the following return?
#
# arr = (1..100).to_a
#
# arr.map do |num|
#   num.even?
# end
#
# arr.select do |num|
#   7
# end
