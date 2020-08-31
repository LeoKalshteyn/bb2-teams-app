class AddViewsToPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :views, :integer, :default => 0
  end
end
