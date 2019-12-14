# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all
Player.destroy_all
StarPlayer.destroy_all

puts "Working"

t1 = Team.create(name: "Chaos", image: "")
p1 = Player.create(name: "Beastman", player_type: "Lineman", cost: "70k", movement_allowance: "5", agility: "3", strength: "3", armour_value: "4", skills: "Horns", team_id: 1)
sp = StarPlayer.create(name: "Elf", player_type: "Lineman", cost: "70k", movement_allowance: "5", agility: "4", strength: "3", armour_value: "4", skills: "Block", team_id: 1)
