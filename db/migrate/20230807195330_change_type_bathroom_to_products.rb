class ChangeTypeBathroomToProducts < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :bathroom, :integer, using: 'room::integer'
  end
end
