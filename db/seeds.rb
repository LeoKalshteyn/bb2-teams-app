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

t1 = Team.create(name: "Humans", image: "http://www.bloodbowl-game.com/img/game-bb2/races/humans/scr01.jpg")
t2 = Team.create(name: "Orcs", image: "http://www.bloodbowl-game.com/img/game-bb2/races/orcs/scr01.jpg")
t3 = Team.create(name: "Dwarfs", image: "http://www.bloodbowl-game.com/img/game-bb2/races/dwarfs/scr01.jpg")
t4 = Team.create(name: "Skaven", image: "http://www.bloodbowl-game.com/img/game-bb2/races/skaven/scr01.jpg")
t5 = Team.create(name: "High Elves", image: "http://www.bloodbowl-game.com/img/game-bb2/races/highelves/scr01.jpg")
t6 = Team.create(name: "Dark Elves", image: "http://www.bloodbowl-game.com/img/game-bb2/races/darkelves/scr01.jpg")
t7 = Team.create(name: "Bretonnians", image: "http://www.bloodbowl-game.com/img/game-bb2/races/bretons/scr01.jpg")
t8 = Team.create(name: "Chaos", image: "http://www.bloodbowl-game.com/img/game-bb2/races/chaos/scr01.jpg")
t9 = Team.create(name: "Wood Elves", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnsx.np.dl.playstation.net%2Fnsx%2Fmaterial%2F8%2F8755a40fb2a49f95b117a3a31a4466f79d679988-1116493.jpg&f=1&nofb=1")
t10 = Team.create(name: "Lizardmen", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-focushop.nexway.com%2Fimages%2Fproducts%2Ffocus%2Fnxw5735a2cb751bb.jpg&f=1&nofb=1")
t11 = Team.create(name: "Norse", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgamingshogun.com%2Fwp-content%2Fuploads%2F2016%2F05%2FBloodbowl2-13.jpg&f=1&nofb=1")
t12 = Team.create(name: "Undead", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgamingshogun.com%2Fwp-content%2Fuploads%2F2016%2F07%2FBloodbowl2-21.jpg&f=1&nofb=1")
t13 = Team.create(name: "Necromantic", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgamingshogun.com%2Fwp-content%2Fuploads%2F2016%2F09%2FBloodbowl2-25.jpg&f=1&nofb=1")
t14 = Team.create(name: "Nurgle", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.macgamestore.com%2Fimages_screenshots%2Fblood-bowl-2-nurgle-dlc-46754.jpeg&f=1&nofb=1")
t15 = Team.create(name: "Khemri", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.macgamestore.com%2Fimages_screenthumbs%2Fblood-bowl-2-khemri-49476.jpeg&f=1&nofb=1")
t16 = Team.create(name: "Chaos Dwarfs", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wingamestore.com%2Fimages_screenshots%2Fblood-bowl-2-chaos-dwarfs-49471.jpeg&f=1&nofb=1")
t17 = Team.create(name: "Amazons", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapollo2.dl.playstation.net%2Fcdn%2FUP4133%2FCUSA01063_00%2FFREE_CONTENTXZFJDnbWPOfvcW1oZSIu%2FPREVIEW_SCREENSHOT1_155390.jpg&f=1&nofb=1")
t18 = Team.create(name: "Vampires", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-focushop.nexway.com%2Fimages%2Fproducts%2Ffocus%2Fnxw59f88df79bcd0.jpg&f=1&nofb=1")
t19 = Team.create(name: "Kislev Circus", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gamersglobal.de%2Fsites%2Fgamersglobal.de%2Ffiles%2Fgalerie%2F280%2FBB2_KislevCircus_05.jpg&f=1&nofb=1")
t20 = Team.create(name: "Goblins", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteam%2Fapps%2F686401%2Fss_111d08f86af3ad22246dd975b3219e7016f302ab.1920x1080.jpg%3Ft%3D1509640127&f=1&nofb=1")
t21 = Team.create(name: "Halflings", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteam%2Fapps%2F686402%2Fss_da60364bf2cd312111f304cdb3a83db267284ccc.1920x1080.jpg%3Ft%3D1509959684&f=1&nofb=1")
t22 = Team.create(name: "Underworld Denizens", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapollo2.dl.playstation.net%2Fcdn%2FUP4133%2FCUSA01063_00%2FFREE_CONTENT2Ea2awEX9XfKIpIJYhlR%2FPREVIEW_SCREENSHOT3_155654.jpg&f=1&nofb=1")
t23 = Team.create(name: "Ogres", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteam%2Fapps%2F686403%2Fss_c4920c3e80cfe4aebd0d1a57021affd231e1ba4b.1920x1080.jpg%3Ft%3D1509640123&f=1&nofb=1")
t24 = Team.create(name: "Elven Union", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapollo2.dl.playstation.net%2Fcdn%2FUP4133%2FCUSA01063_00%2FFREE_CONTENTdBycD2WcihWqzpkI2YG8%2FPREVIEW_SCREENSHOT5_155649.jpg&f=1&nofb=1") 

p1 = Player.create(name: "Human Linemen", player_type: "Lineman", cost: "50k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "None", team_id: 1)
p2 = Player.create(name: "Human Catcher", player_type: "Catcher", cost: "70k", movement_allowance: "8", strength: "2", agility: "3", armour_value: "8", skills: "Dodge, Catch", team_id: 1)
p3 = Player.create(name: "Human Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Pass, Sure Hands", team_id: 1)
p4 = Player.create(name: "Human Blitzer", player_type: "Blitzer", cost: "90k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "84", skills: "Block", team_id: 1)
p5 = Player.create(name: "Ogre", player_type: "Big Guy", cost: "130k", movement_allowance: "5", strength: "5", agility: "2", armour_value: "9", skills: "Bone-Head, Mighty Blow, Thick Skull, Throw Team-Mate, Loner ", team_id: 1)

p1 = Player.create(name: "Beastman", player_type: "Lineman", cost: "70k", movement_allowance: "5", agility: "3", strength: "3", armour_value: "4", skills: "Horns", team_id: 8)

p2 = Player.create(name: "Super", player_type: "Lineman", cost: "70k", movement_allowance: "5", agility: "3", strength: "3", armour_value: "4", skills: "Horns", team_id: 2)

sp1 = StarPlayer.create(name: "Elf", player_type: "Lineman", cost: "70k", movement_allowance: "5", agility: "4", strength: "3", armour_value: "4", skills: "Block", team_id: 1)
