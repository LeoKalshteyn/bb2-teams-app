class TeamSerializer < ActiveModel::Serializer
    attributes :id, :name, :image
    has_many :players
    has many :star_players
end
