class AddTeamRefToStarPlayers < ActiveRecord::Migration[6.0]
  def change
    add_reference :star_players, :team, foreign_key: true
  end
end
