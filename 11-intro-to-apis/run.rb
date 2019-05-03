require 'pry'
require 'rest-client'
require 'json'

puts "Welcome to SWAPI"
puts "Please enter a character name"
char_query = gets.chomp

puts "Thanks!"
puts "Searching for character"

res = RestClient.get("https://swapi.co/api/people/?search=#{char_query}")

character_search_results = JSON.parse(res)

puts "Character found!"

character = character_search_results["results"][0]

character["films"].each do |film_url|
    film_res = RestClient.get(film_url)
    film_hash = JSON.parse(film_res)
    puts film_hash["title"]
end

binding.pry
