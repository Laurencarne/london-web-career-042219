require 'rest-client'
require 'json'
require 'pry'
require 'rainbow'

character_data = RestClient.get('http://swapi.co/api/people/1')
character_data = JSON.parse(character_data)

$welcome = Rainbow("Welcome to the Star Wars app").red
$character_question = Rainbow("Type a character's name to search").red
$more_details_question = Rainbow("Wanna see a list of their [f]ilms, info about their home [p]lanet, or search for another [c]haracter?").red
$goodbye = Rainbow("This is not the app you are looking for").red

$api_endpoint = "https://swapi.co/api/"
$people_endpoint = "#{$api_endpoint}people/"

def character_search(query)
    query.downcase!
    response = RestClient.get("#{$people_endpoint}?search=#{query}")
    results = JSON.parse(response)
    results['results'].length > 0 ? results['results'][0] : nil
end

def pretty_print_character(character)
    if character
        puts "----- #{character["name"]} was born in the year #{character["birth_year"]}"
    else
        puts "----- no character found"
    end
end

def pretty_print_film(film)
    puts "----- #{film["title"]} (#{film["release_date"][0..3]}) -----"
end

def get_films(film_urls)
    film_urls.each do |url|
        response = RestClient.get(url)
        film_data = JSON.parse(response)
        pretty_print_film(film_data)
    end
end

def indefinite_articlerize(params_word)
    %w(a e i o u).include?(params_word[0].downcase) ? "an #{params_word}" : "a #{params_word}"
end

def pretty_print_planet(planet)
    puts "----- #{planet["name"]} is #{indefinite_articlerize(planet["climate"])} planet with a population of #{planet["population"].reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse}."
end

def get_planet(planet_url)
    response = RestClient.get(planet_url)
    planet_data = JSON.parse(response)
    pretty_print_planet(planet_data)
end

def run_character
    puts $character_question
    reply = gets.chomp
    if reply.downcase.include?('exit')
        abort($goodbye)
    end
    character_data = character_search(reply)
    pretty_print_character(character_data)
    character_data
end

def ask_details_question(character_data)
    puts $more_details_question
    reply = gets.chomp
    if reply.downcase.include?('f')
        get_films(character_data["films"])
        ask_details_question(character_data)
    elsif reply.downcase.include?('p')
        get_planet(character_data["homeworld"])
        ask_details_question(character_data)
    elsif reply.downcase.include?('c')
        run
    elsif reply.downcase.include?('exit')
        abort($goodbye)
    else
        restart
    end
end

def restart
    puts Rainbow("Let's start again").red
    run
end

def run
    character_data = run_character
    if character_data
        ask_details_question(character_data)
    else
        restart
    end
    run
end

puts $welcome
run