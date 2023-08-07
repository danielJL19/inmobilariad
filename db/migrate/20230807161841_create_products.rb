class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.references :category, null: false, foreign_key: true
      t.string :name
      t.string :room
      t.string :bathroom

      t.timestamps
    end
  end
end
