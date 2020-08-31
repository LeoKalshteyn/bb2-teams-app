class AddViewsToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :views, :integer, :default => 0
  end
end
