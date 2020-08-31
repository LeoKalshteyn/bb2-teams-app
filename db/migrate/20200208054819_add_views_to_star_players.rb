class AddViewsToStarPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :star_players, :views, :integer, :default => 0
  end
end
