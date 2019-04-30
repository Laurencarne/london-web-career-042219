require_relative "../config/environment.rb"

def reload
  load "config/environment.rb"
end

avengers = Movie.new("Avengers")
age_of_ultron = Movie.new("Avengers: Age of Ultron")
daredevil_movie = Movie.new("Daredevil")

daredevil_show = Show.new("Daredevil")
agents = Show.new("Agents of Shield")
defenders = Show.new("Defenders")

chris = Actor.new("Chris Evans")
ben = Actor.new("Ben Affleck")
clark = Actor.new("Clark Gregg")
robert = Actor.new("Robert Downey Jr.")

iron_man = Character.new("Iron Man", robert)
tony_stark = Character.new("Tony Stark", robert)
cap = Character.new("Captain America", chris)
daredevil = Character.new("Daredevil", ben)
coulson = Character.new("Agent Coulson", clark)

ma1 = MovieAppearance.new(iron_man, avengers)
ma2 = MovieAppearance.new(cap, avengers)
ma3 = MovieAppearance.new(iron_man, age_of_ultron)
ma4 = MovieAppearance.new(cap, age_of_ultron)
ma5 = MovieAppearance.new(daredevil, daredevil_movie)
ma7 = MovieAppearance.new(coulson, age_of_ultron)

sa1 = ShowAppearance.new(daredevil, daredevil_show)
sa2 = ShowAppearance.new(daredevil, defenders)
sa3 = ShowAppearance.new(coulson, agents)

Pry.start
