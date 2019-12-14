class Team < ApplicationRecord
  has_many :players
  has_many :star_players
end
