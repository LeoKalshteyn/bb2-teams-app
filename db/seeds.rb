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

p1 = Player.create(name: "Human Linemen", player_type: "Lineman", cost: "50k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "None", team_id: 1)
p2 = Player.create(name: "Human Catcher", player_type: "Catcher", cost: "70k", movement_allowance: "8", strength: "2", agility: "3", armour_value: "8", skills: "Dodge, Catch", team_id: 1)
p3 = Player.create(name: "Human Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Pass, Sure Hands", team_id: 1)
p4 = Player.create(name: "Human Blitzer", player_type: "Blitzer", cost: "90k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "8", skills: "Block", team_id: 1)
p5 = Player.create(name: "Ogre", player_type: "Big Guy", cost: "130k", movement_allowance: "5", strength: "5", agility: "2", armour_value: "9", skills: "Bone-Head, Mighty Blow, Thick Skull, Throw Team-Mate, Loner", team_id: 1)

sp1 = StarPlayer.create(name: "Elf", player_type: "Lineman", cost: "70k", movement_allowance: "5", strength: "4", agility: "3", armour_value: "4", skills: "Block", team_id: 1)

t2 = Team.create(name: "Orcs", image: "http://www.bloodbowl-game.com/img/game-bb2/races/orcs/scr01.jpg")

p6 = Player.create(name: "Orc Linemen", player_type: "Lineman", cost: "50k", movement_allowance: "5", strength: "3", agility: "3", armour_value: "9", skills: "None", team_id: 2)
p7 = Player.create(name: "Goblin", player_type: "Special", cost: "40k", movement_allowance: "6", strength: "2", agility: "3", armour_value: "7", skills: "Right Stuff, Dodge, Stunty", team_id: 2)
p8 = Player.create(name: "Orc Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "5", strength: "3", agility: "3", armour_value: "8", skills: "Pass, Sure Hands", team_id: 2)
p9 = Player.create(name: "Black Orc", player_type: "Blocker", cost: "80k", movement_allowance: "4", strength: "4", agility: "2", armour_value: "9", skills: "None", team_id: 2)
p10 = Player.create(name: "Orc Blitzer", player_type: "Lineman", cost: "80k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "9", skills: "Block", team_id: 2)
p11 = Player.create(name: "Troll", player_type: "Big Guy", cost: "110k", movement_allowance: "4", strength: "5", agility: "1", armour_value: "9", skills: "Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration, Throw Team-Mate", team_id: 2)

t3 = Team.create(name: "Dwarfs", image: "http://www.bloodbowl-game.com/img/game-bb2/races/dwarfs/scr01.jpg")

p12 = Player.create(name: "Longbeard", player_type: "Blocker", cost: "70k", movement_allowance: "4", strength: "3", agility: "2", armour_value: "9", skills: "Block, Thick Skull, Tackle", team_id: 3)
p13 = Player.create(name: "Dwarf Runner", player_type: "Runner", cost: "80k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Sure Hands, Thick Skull", team_id: 3)
p14 = Player.create(name: "Dwarf Blitzer", player_type: "Blitzer", cost: "80k", movement_allowance: "5", strength: "3", agility: "3", armour_value: "9", skills: "Thick Skull, Block", team_id: 3)
p15 = Player.create(name: "Troll Slayer", player_type: "Special", cost: "90k", movement_allowance: "5", strength: "3", agility: "2", armour_value: "8", skills: "Block, Thick Skull, Dauntless, Frenzy", team_id: 3)
p16 = Player.create(name: "Deathroller", player_type: "Big Guy", cost: "160k", movement_allowance: "4", strength: "7", agility: "1", armour_value: "10", skills: "Break Tackle, Dirty Player, Juggernaut, Mighty Blow, No Hands, Secret Weapon, Stand Firm, Loner", team_id: 3)

t4 = Team.create(name: "Skaven", image: "http://www.bloodbowl-game.com/img/game-bb2/races/skaven/scr01.jpg")

p17 = Player.create(name: "Skaven Lineman", player_type: "Lineman", cost: "50k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "7", skills: "None", team_id: 4)
p18 = Player.create(name: "Skaven Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "7", skills: "Pass, Sure Hands", team_id: 4)
p19 = Player.create(name: "Gutter Runner", player_type: "Runer", cost: "80k", movement_allowance: "9", strength: "2", agility: "4", armour_value: "7", skills: "Dodge", team_id: 4)
p20 = Player.create(name: "Stormvermin", player_type: "Blitzer", cost: "90k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "8", skills: "Block", team_id: 4)
p21 = Player.create(name: "Rat Ogre", player_type: "Big Guy", cost: "150k", movement_allowance: "6", strength: "5", agility: "2", armour_value: "8", skills: "Frenzy, Mighty Blow, Loner, Prehinsile Tail, Wild Animal", team_id: 4)

t5 = Team.create(name: "High Elves", image: "http://www.bloodbowl-game.com/img/game-bb2/races/highelves/scr01.jpg")

p22 = Player.create(name: "High Elf Linemen", player_type: "Lineman", cost: "70k", movement_allowance: "6", strength: "3", agility: "4", armour_value: "8", skills: "None", team_id: 5)
p23 = Player.create(name: "High Elf Catcher", player_type: "Catcher", cost: "90k", movement_allowance: "8", strength: "3", agility: "4", armour_value: "7", skills: "Catch", team_id: 5)
p24 = Player.create(name: "High Elf Thrower", player_type: "Thrower", cost: "90k", movement_allowance: "6", strength: "3", agility: "4", armour_value: "8", skills: "Pass, Safe Throw", team_id: 5)
p25 = Player.create(name: "High Elf Blitzer", player_type: "Blitzer", cost: "100k", movement_allowance: "7", strength: "3", agility: "4", armour_value: "8", skills: "Block", team_id: 5)

t6 = Team.create(name: "Dark Elves", image: "http://www.bloodbowl-game.com/img/game-bb2/races/darkelves/scr01.jpg")

p26 = Player.create(name: "Dark Elf Linemen", player_type: "Lineman", cost: "70k", movement_allowance: "6", strength: "3", agility: "4", armour_value: "8", skills: "None", team_id: 6)
p27 = Player.create(name: "Dark Elf Runner", player_type: "Runner", cost: "80k", movement_allowance: "7", strength: "3", agility: "4", armour_value: "7", skills: "Dump-Off", team_id: 6)
p28 = Player.create(name: "Assassin", player_type: "Special", cost: "90k", movement_allowance: "6", strength: "3", agility: "4", armour_value: "7", skills: "Shadowing, Stab", team_id: 6)
p29 = Player.create(name: "Dark Elf Blitzer", player_type: "Blitzer", cost: "100k", movement_allowance: "7", strength: "3", agility: "4", armour_value: "8", skills: "Block", team_id: 6)
p30 = Player.create(name: "Witch Elf", player_type: "Special", cost: "110k", movement_allowance: "7", strength: "3", agility: "4", armour_value: "7", skills: "Frenzy, Dodge, Jump Up", team_id: 6)

t7 = Team.create(name: "Bretonnians", image: "http://www.bloodbowl-game.com/img/game-bb2/races/bretons/scr01.jpg")

p31 = Player.create(name: "Bretonnian Linemen", player_type: "Lineman", cost: "40k", movement_allowance: "6", strength: "3", agility: "2", armour_value: "7", skills: "Fend", team_id: 7)
p32 = Player.create(name: "Bretonnian Blitzer", player_type: "Blitzer", cost: "110k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "8", skills: "Block, Catch, Dauntless", team_id: 7)
p33 = Player.create(name: "Bretonnian Blocker", player_type: "Blocker", cost: "70k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Wrestle", team_id: 7)

t8 = Team.create(name: "Chaos", image: "http://www.bloodbowl-game.com/img/game-bb2/races/chaos/scr01.jpg")

p34 = Player.create(name: "Beastman", player_type: "Lineman", cost: "60k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Horns", team_id: 8)
p35 = Player.create(name: "Chaos Warrior", player_type: "Blocker", cost: "100k", movement_allowance: "5", strength: "4", agility: "3", armour_value: "9", skills: "None", team_id: 8)
p36 = Player.create(name: "Minotaur", player_type: "Big Guy", cost: "150k", movement_allowance: "5", strength: "5", agility: "2", armour_value: "8", skills: "Thick Skull, Mighty Blow, Horns, Frenzy, Loner, Wild Animal", team_id: 8)

t9 = Team.create(name: "Wood Elves", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnsx.np.dl.playstation.net%2Fnsx%2Fmaterial%2F8%2F8755a40fb2a49f95b117a3a31a4466f79d679988-1116493.jpg&f=1&nofb=1")

p37 = Player.create(name: "Wood Elf Linemen", player_type: "Lineman", cost: "70k", movement_allowance: "7", strength: "3", agility: "4", armour_value: "7", skills: "None", team_id: 9)
p38 = Player.create(name: "Wood Elf Catcher", player_type: "Catcher", cost: "90k", movement_allowance: "8", strength: "2", agility: "4", armour_value: "7", skills: "Catch, Dodge, Sprint", team_id: 9)
p39 = Player.create(name: "Wood Elf Thrower", player_type: "Thrower", cost: "90k", movement_allowance: "7", strength: "3", agility: "4", armour_value: "7", skills: "Pass", team_id: 9)
p40 = Player.create(name: "Wardancer", player_type: "Special", cost: "120k", movement_allowance: "8", strength: "3", agility: "4", armour_value: "7", skills: "Block, Dodge, Leap", team_id: 9)
p41 = Player.create(name: "Treeman", player_type: "Big Guy", cost: "120k", movement_allowance: "2", strength: "6", agility: "1", armour_value: "10", skills: "Mighty Blow, Loner, Stand Firm, Strong Arm, Thick Skull, Throw Team-Mate, Take Root", team_id: 9)

t10 = Team.create(name: "Lizardmen", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-focushop.nexway.com%2Fimages%2Fproducts%2Ffocus%2Fnxw5735a2cb751bb.jpg&f=1&nofb=1")

p42 = Player.create(name: "Skink", player_type: "Runner", cost: "60k", movement_allowance: "8", strength: "2", agility: "3", armour_value: "7", skills: "Stunty, Dodge", team_id: 10)
p43 = Player.create(name: "Saurus", player_type: "Blocker", cost: "80k", movement_allowance: "6", strength: "4", agility: "1", armour_value: "9", skills: "None", team_id: 10)
p44 = Player.create(name: "Kroxigor", player_type: "Big Guy", cost: "140k", movement_allowance: "6", strength: "5", agility: "1", armour_value: "9", skills: "Loner, Mighty Blow, Bone-Head, Prehinsile Tail, Thick Skull,", team_id: 10)

t11 = Team.create(name: "Norse", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgamingshogun.com%2Fwp-content%2Fuploads%2F2016%2F05%2FBloodbowl2-13.jpg&f=1&nofb=1")

p45 = Player.create(name: "Norse Linemen", player_type: "Lineman", cost: "50k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "Block", team_id: 11)
p46 = Player.create(name: "Norse Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "Block, Pass", team_id: 11)
p47 = Player.create(name: "Norse Runner", player_type: "Runner", cost: "90k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "7", skills: "Block, Dauntless", team_id: 11)
p48 = Player.create(name: "Berserker", player_type: "Blitzer", cost: "90k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "Block, Frenzy, Jump Up", team_id: 11)
p49 = Player.create(name: "Ulfwereners", player_type: "Blocker", cost: "110k", movement_allowance: "6", strength: "4", agility: "2", armour_value: "8", skills: "Frenzy", team_id: 11)
p50 = Player.create(name: "Yhetee", player_type: "Big Guy", cost: "140k", movement_allowance: "5", strength: "5", agility: "1", armour_value: "8", skills: "Loner, Claws, Disturbing Presence, Frenzy, Wild Animal", team_id: 11)

t12 = Team.create(name: "Undead", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgamingshogun.com%2Fwp-content%2Fuploads%2F2016%2F07%2FBloodbowl2-21.jpg&f=1&nofb=1")

p51 = Player.create(name: "Skeleton", player_type: "Lineman", cost: "40k", movement_allowance: "5", strength: "3", agility: "2", armour_value: "7", skills: "Regeneration, Thick Skull", team_id: 12)
p52 = Player.create(name: "Zombie", player_type: "Lineman", cost: "40k", movement_allowance: "4", strength: "3", agility: "2", armour_value: "8", skills: "Regeneration", team_id: 12)
p53 = Player.create(name: "Ghoul", player_type: "Runner", cost: "70k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "7", skills: "Dodge", team_id: 12)
p54 = Player.create(name: "Wight", player_type: "Blitzer", cost: "90k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Block, Regeneration", team_id: 12)
p55 = Player.create(name: "Mummy", player_type: "Blocker", cost: "120k", movement_allowance: "3", strength: "5", agility: "1", armour_value: "9", skills: "Mighty Blow, Regeneration", team_id: 12)

t13 = Team.create(name: "Necromantic", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgamingshogun.com%2Fwp-content%2Fuploads%2F2016%2F09%2FBloodbowl2-25.jpg&f=1&nofb=1")

p56 = Player.create(name: "Zombie", player_type: "Lineman", cost: "40k", movement_allowance: "4", strength: "3", agility: "2", armour_value: "8", skills: "Regeneration", team_id: 13)
p57 = Player.create(name: "Ghoul", player_type: "Runner", cost: "70k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "7", skills: "Dodge", team_id: 13)
p58 = Player.create(name: "Wight", player_type: "Blitzer", cost: "90k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Block, Regeneration", team_id: 13)
p59 = Player.create(name: "Flesh Golem", player_type: "Blocker", cost: "110k", movement_allowance: "4", strength: "4", agility: "2", armour_value: "9", skills: "Regeneration, Stand Firm, Thick Skull", team_id: 13)
p60 = Player.create(name: "Werewolf", player_type: "Special", cost: "120k", movement_allowance: "8", strength: "3", agility: "3", armour_value: "8", skills: "Claw, Frenzy, Regeneration", team_id: 13)

t14 = Team.create(name: "Nurgle", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.macgamestore.com%2Fimages_screenshots%2Fblood-bowl-2-nurgle-dlc-46754.jpeg&f=1&nofb=1")

p61 = Player.create(name: "Rotter", player_type: "Lineman", cost: "40k", movement_allowance: "5", strength: "3", agility: "3", armour_value: "8", skills: "Decay, Nurgle's Rot", team_id: 14)
p62 = Player.create(name: "Pestigor", player_type: "Blitzer", cost: "80k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Horns, Nurgle's Rot, Regeneration", team_id: 14)
p63 = Player.create(name: "Nurgle Warrior", player_type: "Blocker", cost: "110k", movement_allowance: "4", strength: "4", agility: "2", armour_value: "9", skills: "Disturbing Presence, Foul Appearance, Nurgle's Rot, Regeneration", team_id: 14)
p64 = Player.create(name: "Beast of Nurgle", player_type: "Big Guy", cost: "140k", movement_allowance: "4", strength: "5", agility: "1", armour_value: "9", skills: "Loner, Disturbing Presence, Foul Appearance, Mighty Blow, Nurgle's Rot, Really Stupid, Regeneration, Tentacles", team_id: 14)

t15 = Team.create(name: "Khemri", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.macgamestore.com%2Fimages_screenthumbs%2Fblood-bowl-2-khemri-49476.jpeg&f=1&nofb=1")

p65 = Player.create(name: "Skeleton", player_type: "Lineman", cost: "40k", movement_allowance: "5", strength: "3", agility: "2", armour_value: "7", skills: "Regeneration, Thick Skull", team_id: 15)
p66 = Player.create(name: "Thro-Ra", player_type: "Thrower", cost: "70k", movement_allowance: "6", strength: "3", agility: "2", armour_value: "7", skills: "Pass, Regeneration, Sure Hands", team_id: 15)
p67 = Player.create(name: "Blitz-Ra", player_type: "Blitzer", cost: "90k", movement_allowance: "6", strength: "3", agility: "2", armour_value: "8", skills: "Block, Regeneration", team_id: 15)
p68 = Player.create(name: "Tomb Guardian", player_type: "Blocker", cost: "120k", movement_allowance: "4", strength: "5", agility: "1", armour_value: "9", skills: "Decay, Regeneration", team_id: 15)

t16 = Team.create(name: "Chaos Dwarfs", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wingamestore.com%2Fimages_screenshots%2Fblood-bowl-2-chaos-dwarfs-49471.jpeg&f=1&nofb=1")

p69 = Player.create(name: "Hobgoblin", player_type: "Lineman", cost: "40k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "None", team_id: 16)
p70 = Player.create(name: "Chaos Dwarf Blocker", player_type: "Blocker", cost: "70k", movement_allowance: "4", strength: "3", agility: "2", armour_value: "9", skills: "Block, Tackle, Thick Skull", team_id: 16)
p71 = Player.create(name: "Bull Centaur", player_type: "Blitzer", cost: "130k", movement_allowance: "6", strength: "4", agility: "2", armour_value: "9", skills: "Sprint, Sure Feet, Thick Skull", team_id: 16)
p72 = Player.create(name: "Minotaur", player_type: "Big Guy", cost: "150k", movement_allowance: "5", strength: "5", agility: "2", armour_value: "8", skills: "Thick Skull, Mighty Blow, Horns, Frenzy, Loner, Wild Animal", team_id: 16)

t17 = Team.create(name: "Amazons", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapollo2.dl.playstation.net%2Fcdn%2FUP4133%2FCUSA01063_00%2FFREE_CONTENTXZFJDnbWPOfvcW1oZSIu%2FPREVIEW_SCREENSHOT1_155390.jpg&f=1&nofb=1")

p73 = Player.create(name: "Amazon Linewomen", player_type: "Lineman", cost: "50k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "Dodge", team_id: 17)
p74 = Player.create(name: "Amazon Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "Dodge, Pass", team_id: 17)
p75 = Player.create(name: "Amazon Catcher", player_type: "Catcher", cost: "70k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "Dodge, Catch", team_id: 17)
p76 = Player.create(name: "Amazon Blitzer", player_type: "Blitzer", cost: "90k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "Dodge, Block", team_id: 17)

t18 = Team.create(name: "Vampires", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-focushop.nexway.com%2Fimages%2Fproducts%2Ffocus%2Fnxw59f88df79bcd0.jpg&f=1&nofb=1")

p77 = Player.create(name: "Thrall", player_type: "Lineman", cost: "40k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "7", skills: "None", team_id: 18)
p78 = Player.create(name: "Vampire", player_type: "Special", cost: "110k", movement_allowance: "6", strength: "4", agility: "4", armour_value: "8", skills: "Bloodlust, Hypnotic Gaze, Regeneration", team_id: 18)

t19 = Team.create(name: "Kislev Circus", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gamersglobal.de%2Fsites%2Fgamersglobal.de%2Ffiles%2Fgalerie%2F280%2FBB2_KislevCircus_05.jpg&f=1&nofb=1")

p79 = Player.create(name: "Kislev Linemen", player_type: "Lineman", cost: "60k", movement_allowance: "6", strength: "3", agility: "3", armour_value: "8", skills: "Leap, Very Long Legs", team_id: 19)
p80 = Player.create(name: "Kislev Catcher", player_type: "Catcher", cost: "88k", movement_allowance: "7", strength: "2", agility: "4", armour_value: "7", skills: "Leap, Very Long Legs, Diving Catch", team_id: 19)
p81 = Player.create(name: "Kislev Blitzer", player_type: "Blitzer", cost: "110k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "8", skills: "Leap, Very Long Legs, Jump Up, Diving Tackle", team_id: 19)
p82 = Player.create(name: "Tame Bear", player_type: "Big Guy", cost: "140k", movement_allowance: "6", strength: "5", agility: "1", armour_value: "9", skills: "Bone-Head, Mighty Blow, Thick Skull, Prehinsile Tail, Loner", team_id: 19)

t20 = Team.create(name: "Goblins", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteam%2Fapps%2F686401%2Fss_111d08f86af3ad22246dd975b3219e7016f302ab.1920x1080.jpg%3Ft%3D1509640127&f=1&nofb=1")

p83 = Player.create(name: "Goblin", player_type: "Runner", cost: "40k", movement_allowance: "6", strength: "2", agility: "3", armour_value: "7", skills: "Right Stuff, Dodge, Stunty", team_id: 20)
p84 = Player.create(name: "Looney", player_type: "Special", cost: "40k", movement_allowance: "6", strength: "2", agility: "3", armour_value: "7", skills: "Secret Weapon, Stunty, Chainsaw", team_id: 20)
p85 = Player.create(name: "Troll", player_type: "Big Guy", cost: "110k", movement_allowance: "4", strength: "5", agility: "1", armour_value: "9", skills: "Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration, Throw Team-Mate", team_id: 20)
p86 = Player.create(name: "Pogoer", player_type: "Special", cost: "70k", movement_allowance: "7", strength: "2", agility: "3", armour_value: "7", skills: "Dodge, Leap, Very Long Legs, Stunty", team_id: 20)
p87 = Player.create(name: "Fanatic", player_type: "Special", cost: "70k", movement_allowance: "3", strength: "7", agility: "3", armour_value: "7", skills: "Secret Weapon, Ball & Chain, No Hands, Stunty", team_id: 20)
p88 = Player.create(name: "Bombardier", player_type: "Special", cost: "40k", movement_allowance: "6", strength: "2", agility: "3", armour_value: "7", skills: "Bombardier, Dodge, Secret Weapon, Stunty", team_id: 20)

t21 = Team.create(name: "Halflings", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteam%2Fapps%2F686402%2Fss_da60364bf2cd312111f304cdb3a83db267284ccc.1920x1080.jpg%3Ft%3D1509959684&f=1&nofb=1")

p89 = Player.create(name: "Halfling", player_type: "Runner", cost: "30k", movement_allowance: "5", strength: "2", agility: "3", armour_value: "6", skills: "Dodge, Right Stuff, Stunty", team_id: 21)
p90 = Player.create(name: "Treeman", player_type: "Big Guy", cost: "120k", movement_allowance: "2", strength: "6", agility: "1", armour_value: "10", skills: "Mighty Blow, Stand Firm, Strong Arm, Thick Skull, Throw Team-Mate, Take Root", team_id: 21)

t22 = Team.create(name: "Underworld Denizens", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapollo2.dl.playstation.net%2Fcdn%2FUP4133%2FCUSA01063_00%2FFREE_CONTENT2Ea2awEX9XfKIpIJYhlR%2FPREVIEW_SCREENSHOT3_155654.jpg&f=1&nofb=1")

p91 = Player.create(name: "Underworld Goblin", player_type: "Runner", cost: "40k", movement_allowance: "6", strength: "2", agility: "3", armour_value: "7", skills: "Right Stuff, Dodge, Stunty", team_id: 22)
p92 = Player.create(name: "Skaven Lineman", player_type: "Lineman", cost: "50k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "7", skills: "Animosity", team_id: 22)
p93 = Player.create(name: "Skaven Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "7", skills: "Animosity, Pass, Sure Hands", team_id: 22)
p94 = Player.create(name: "Skaven Blitzer", player_type: "Blitzer", cost: "90k", movement_allowance: "7", strength: "3", agility: "3", armour_value: "8", skills: "Animosity, Block", team_id: 22)
p95 = Player.create(name: "Warpstone Troll", player_type: "Big Guy", cost: "110k", movement_allowance: "4", strength: "5", agility: "1", armour_value: "9", skills: "Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration, Throw Team-Mate", team_id: 22)

t23 = Team.create(name: "Ogres", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteam%2Fapps%2F686403%2Fss_c4920c3e80cfe4aebd0d1a57021affd231e1ba4b.1920x1080.jpg%3Ft%3D1509640123&f=1&nofb=1")

p96 = Player.create(name: "Gnoblar", player_type: "Runner", cost: "20k", movement_allowance: "5", strength: "1", agility: "3", armour_value: "5", skills: "Right Stuff, Dodge, Stunty, Side Step, Titchy", team_id: 23)
p97 = Player.create(name: "Ogre", player_type: "Big Guy", cost: "140k", movement_allowance: "5", strength: "5", agility: "2", armour_value: "9", skills: "Bone-Head, Mighty Blow, Thick Skull, Throw Team-Mate", team_id: 23)

t24 = Team.create(name: "Elven Union", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapollo2.dl.playstation.net%2Fcdn%2FUP4133%2FCUSA01063_00%2FFREE_CONTENTdBycD2WcihWqzpkI2YG8%2FPREVIEW_SCREENSHOT5_155649.jpg&f=1&nofb=1")

p98 = Player.create(name: "Elven Linemen", player_type: "Lineman", cost: "60k", movement_allowance: "6", strength: "3", agility: "4", armour_value: "7", skills: "None", team_id: 24)
p99 = Player.create(name: "Elven Thrower", player_type: "Thrower", cost: "70k", movement_allowance: "6", strength: "3", agility: "4", armour_value: "7", skills: "Pass", team_id: 24)
p100 = Player.create(name: "Elven Catcher", player_type: "Catcher", cost: "100k", movement_allowance: "8", strength: "3", agility: "4", armour_value: "7", skills: "Catch, Nerves Of Steel", team_id: 24)
p101 = Player.create(name: "Elven Blitzer", player_type: "Blitzer", cost: "110k", movement_allowance: "7", strength: "3", agility: "4", armour_value: "8", skills: "Block, Side Step", team_id: 24)
