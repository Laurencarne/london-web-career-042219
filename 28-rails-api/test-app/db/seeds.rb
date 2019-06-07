# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all

users = [
  {name: 'dan', password:'dan1234'},
  {name: 'mani', password:'Porsche911'},
  {name: 'nico', password:'js <3'},
]

User.create users

Comment.delete_all

30.times do 
  Comment.create body: Faker::Coffee.notes, user_id: User.all.map {|u| u.id}.sample
end

