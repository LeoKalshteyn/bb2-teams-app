class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :player_type
      t.string :cost
      t.string :movement_allowance
      t.string :strength
      t.string :agility
      t.string :armour_value
      t.string :skills

      t.timestamps
    end
  end
end
