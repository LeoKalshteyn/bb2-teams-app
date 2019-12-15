class TeamSerializer < ActiveModel::Serializer
    attributes :id, :name, :image
    has_many :players
    has_many :star_players
end
