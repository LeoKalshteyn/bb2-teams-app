class TeamSerializer < ActiveModel::Serializer
    attributes :id, :name, :image, :views
    has_many :players
    has_many :star_players
end
