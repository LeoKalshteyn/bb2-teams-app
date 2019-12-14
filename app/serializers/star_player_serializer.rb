class StarPlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills
  belongs_to :team
end
